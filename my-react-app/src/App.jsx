import './App.css'
import logo from './assets/logo.png';

const loja = {
  name: 'Phantom System',
  logo: logo,
};

const servicos = [
  {title: 'Análise técnica do Hardware', isService: true, id: 1 },
  {title: 'Limpeza interna e externa', isService: true, id: 2 },
  {title: 'Backup e Formatação', isService: true, id: 3 },
  {title: 'Manutenção Preventiva e Corretiva', isService: true, id: 4 },
  {title: 'Recuperação de arquivos', isService: true, id: 5 },
];

function App() {
  return (
    <div>
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

          {/* Lista de Serviços */}
          <h2>Serviços Disponíveis</h2>

          {servicos.map(services =>
            <ul>
              <li
              className='list1'
              key={services.id}
              style={{color: services.isService? '#8182b4' : 'darkgreen'}}>{services.title}</li>
            </ul>
          )}

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