import './App.css'

function App() {

  const board = Array(9).fill(null)
  return (
    <main>
      <section className='board'>
        {
          board.map((_, index) => {
            return (
              <section className='cell'>
                <span className='cell-content'>
                  {index}
                </span>
              </section>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
