"use client"
import { useState } from "react"


const Page = () => {

  const [nombre,setNombre] = useState('');
  const [edad,setEdad] = useState(0);
  const [mensaje,setMensaje] = useState('');

  const [contador, setContador] = useState(0);

  function contar(){
    setContador(contador + 1);
  }

  function reiniciar(){
    setContador(0);
  }
  
  const manejadorFormulario = (e:any) => {
    e.preventDefault();

    if (edad >= 18){
      setMensaje('Es mayor de edad');
    } else {
      setMensaje('Es menor de edad');
    }
    console.log('Se hizo click');
  }
  
  return (
    <div>
      <h1>Proyecto final</h1>
      <h2>Estructura de datos</h2>
      <h3>{mensaje}</h3>
      <button onClick={contar}>Contar</button>
      <button onClick={reiniciar}>Reiniciar</button>

      <form 
        onSubmit={manejadorFormulario}
        >

        <input type="text" 
          placeholder="Edad" 
          value={edad} 
          onChange={(event) => setEdad(parseInt(event.target.value))}
          />

        <input type="submit" />
      </form>
      
      <p>{contador} número de clicks</p>
    </div>
  )
}

export default Page
