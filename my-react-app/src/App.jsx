import './App.css'
import logo from './assets/logo.png';
import background from './assets/background.png'

const loja = {
  name: 'Phantom System',
  logo: logo,
  background: background,
};

function App() {
  return (
    <div className='background' style={{ backgroundImage: `url(${background})`}}>
      <div className='App'>
      
        {/* Renderiza logo da loja */}
        <img src={loja.logo} alt={`Logo da loja ${loja.name}`} className="logo"/>

        <h1>Phantom System</h1>
        <p className='p-principal'>
          Seu computador está com problemas?<br/>
          Nós temos a solução!
        </p>
      </div>
      <footer className='footer'>
        <p className='contatos'>
          contatos
          <br/>
          whatsapp: 14 99889-2226
          <br />
          e-mail: rafael.avare3000@gmail.com
        </p>
      </footer>
    </div>
  )
}

export default App;