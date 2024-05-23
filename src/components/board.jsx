import { useState } from 'react'
import { Square } from './square';
import { PLAYERS, WINNERCOMBOS } from '../variables/variables';
import '../App.css'
import { TurnIndicator } from './turn-indicator';


export function Board() {
  const [winner, setWinner] = useState(null)
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(PLAYERS.X);

  const checkWinner = (newBoard) => {
    for (const [a, b, c] of WINNERCOMBOS) {
      if (newBoard[a] && (newBoard[a] === newBoard[b]) && (newBoard[b] === newBoard[c])) setWinner(newBoard[a]);
    }
    return
  }

  const updateBoard = (index) => {
    const auxBoard = [...board]
    console.log(winner)
    if (auxBoard[index] || winner) return
    auxBoard[index] = turn
    setBoard(auxBoard)
    checkWinner(auxBoard)
    setTurn(turn === PLAYERS.X ? PLAYERS.O : PLAYERS.X)
  }

  return (
    <>
      <section className='board'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <TurnIndicator turn={turn}/>
    </>
  )
}