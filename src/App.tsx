import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  function handleCalcular() {
    alert("teste")
  }

  return (
    <div className='container'>
      <h1 className='title'>Descubra a sua idade</h1>

      <form className='form' onSubmit={handleCalcular}>
        <label>Informe seu nome</label>
        <input 
          className='input' 
          type="text" 
          placeholder='Digite seu nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Informe o ano que você nasceu</label>
        <input 
          className='input' 
          type="text" 
          placeholder='Digite o ano que nasceu'
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <input className='button' type='submit' value='Descobrir idade'/>
      </form>
    </div>
  )
}

export default App
