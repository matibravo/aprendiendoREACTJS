import { useEffect, useState } from "react"


function App() {
  
  const [habilitar, setHabilitar] = useState(false)
  const [posicion, setPosicion] = useState({x: 0, y: 0})
 
  useEffect(() => {
    console.log('uso de hook efecto')    

    const handleMove = (e) => {
      const {clientX, clientY} = e
      console.log(`posiscion x: ${clientX} - posicion y: ${clientY}`)
      setPosicion({ x: clientX, y: clientY})
    }

    if (habilitar) window.addEventListener('pointermove', handleMove)

    //limpiar use efect para que deje de seguir el movimiento del puntero  
    //limpieza del efecto, se usa para eventListener o setInterval
    return () => {
      setPosicion({x: 0, y: 0})
      window.removeEventListener('pointermove', handleMove)
    }


  }, [habilitar])

  return (
    <>
      <h1>Proyecto 03</h1>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${posicion.x}px, ${posicion.y}px)`
      }} 
      />
      <button onClick={ () => setHabilitar(!habilitar) }>
        {habilitar ? 'Dejar de' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

export default App
