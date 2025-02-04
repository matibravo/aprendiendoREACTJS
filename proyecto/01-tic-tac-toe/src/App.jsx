import { useState } from 'react'
import './App.css'

const TURNOS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected': ''}`
  return (
    <div className= {className}>
      {children}
    </div>
  )
}

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNOS.X)
  const updateBoard = () => {

  }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <section className='game'>
          {
            board.map((_, index) => {
              return (
                <Square 
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
              )
            })
          }
        </section>
        <section className='turn'>
            <Square isSelected={ turno === TURNOS.X}>
              {TURNOS.X}
            </Square>
            <Square isSelected={ turno === TURNOS.O}>
              {TURNOS.O}
            </Square>
        </section>
      </main>
    </>
  )
}

export default App
