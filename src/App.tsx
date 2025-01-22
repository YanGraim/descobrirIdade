import { useState, FormEvent } from 'react'
import './App.css'

interface ResultadoProps {
  nome: string;
  idade: number;
}


function App() {
  const [nome, setNome] = useState("");
  const [anoNascimento, setAnoNascimento] = useState("")
  const [resultado, setResultado] = useState<ResultadoProps>();

  function handleCalcular(event: FormEvent) {
    event.preventDefault()
    
    const anoAtual = new Date().getUTCFullYear();
    setResultado({
      nome: nome,
      idade: anoAtual - Number(anoNascimento)
    });
    setNome('');
    setAnoNascimento('');
  }

  return (
    <div className='container'>
      <h1 className='title'>Descubra a sua idade</h1>

      <form className='form' onSubmit={handleCalcular}>
        <label>Informe seu nome</label>
        <input 
          className='input'
          placeholder='Digite seu nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Informe o ano que você nasceu</label>
        <input 
          className='input'
          placeholder='Digite o ano que nasceu'
          value={anoNascimento}
          onChange={(e) => setAnoNascimento(e.target.value)}
        />

        <input className='button' type='submit' value='Descobrir idade'/>
      </form>

      {resultado && resultado?.nome !== '' &&  <p>{resultado.nome} você tem: {resultado?.idade} anos</p>}
    </div>
  )
}

export default App
