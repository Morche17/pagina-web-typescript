"use client"
import { useState } from "react"


const Page = () => {

  const [nombre,setNombre] = useState('Emanuel Alejandro T. M.');
  const [contador, setContador] = useState(0);

  function contar(){
    setContador(contador + 1);
  }

  function reiniciar(){
    setContador(0);
  }
  
  return (
    <div>
      <h1>Proyecto final</h1>
      <h2>Estructura de datos</h2>
      <h3>{nombre}</h3>
      <button onClick={contar}>Contar</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <p>{contador} número de clicks</p>
    </div>
  )
}

export default Page
