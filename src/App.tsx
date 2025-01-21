import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='container'>
      <h1 className='title'>Descubra a sua idade</h1>

      <form className='form'>
        <label>Informe seu nome</label>
        <input type="text" placeholder='Digite seu nome'/>

        <label>Informe o ano que você nasceu</label>
        <input type="text" placeholder='Digite o ano que nasceu' />

        <button>Descobrir idade</button>
      </form>
    </div>
  )
}

export default App
