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

      {/* Carrega a seção principal de elementos da loja */}
      <main>
        <div className='container1'>
          <h2>Serviços Disponíveis</h2>
          <ul>
            <li><p>Análise técnica do Hardware</p></li>
            <li><p>Limpeza interna e externa</p></li>
            <li><p>Backup e Formatação</p></li>
            <li><p>Manutenção Preventiva e Corretiva</p></li>
            <li><p>Recuperação de arquivos</p></li>
          </ul>
        </div>
      </main>

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