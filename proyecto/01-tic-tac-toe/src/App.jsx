import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Square from './components/Square'
import { TURNOS, WINNER_COMBOS } from './constantes'

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNOS.X)
  const [winner, setWinner] = useState(null) //null no hay ganador, false empate, true ganador
  
  //setea los valores como al inicio del juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurno(TURNOS.X)
    setWinner(null)
  }

  const checkEndGame = (boardToCheck) => {
    //metodo every retorna valor boleano si todos los elementos cumplen que son distinto a null retorna true
    return boardToCheck.every((cuadrado) => cuadrado != null)
  }

  const checkWinner = (boardToCheck) => {
    //revisar todas las combinaciones ganadores
    for (const combo of WINNER_COMBOS) {
      //console.log(combo)
      const [a, b, c] = combo
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        console.log(boardToCheck[a])
        return boardToCheck[a]
      } 
    }
          
  }

  const updateBoard = (index) => {
    //si el cuadro ya tiene un valor(porque si no tiene seria null), retorna y no continua sobreescribiendo el cuadro
    if (board[index] || winner) return
    //usa spreed operator para copiar el arreglo original para su manipulacion
    const newBoard = [...board]
    //y el cuadro del nuevo tablero le asigna el valor del turno
    newBoard[index] = turno
    //aqui setea el tablero con el nuevo tablero
    setBoard(newBoard)
    //y aqui setea el turno q continua
    const nuevoTurno = turno === TURNOS.X ? TURNOS.O : TURNOS.X
    setTurno(nuevoTurno)
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
      })
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

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
        {
          //section condicionante se mostrara en caso de ganador o perdedor
          //if condicionante con &&
          winner != null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner === false ? 'Empate' : 'Ganador: ' + winner
                  }
                </h2>
                <footer>
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )
        }
      </main>
    </>
  )
}

export default App
