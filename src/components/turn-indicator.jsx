import { PLAYERS } from "../variables/variables";
import '../App.css'

export function TurnIndicator({turn}) {
  const className = `turn-indicator ${turn === PLAYERS.X ? 'xturn' : 'oturn'}`;
  return (
    <section className={className} >
      <p>{turn === PLAYERS.X ? PLAYERS.X : PLAYERS.O}</p>
    </section>
  )
}