export function Square({children, index, updateBoard}) {
  
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <section className='cell' onClick={handleClick}>
      <span className="cell-content">
        {children}
      </span>
    </section>
  )
}

