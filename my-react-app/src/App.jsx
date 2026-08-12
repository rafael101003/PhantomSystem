import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';
import Container from './containments/container';
import ContainerServicos from './containments/container-servicos'
import { Instagram, Whatsapp } from 'react-bootstrap-icons';

const loja = {
  nome: 'Phantom System',
  logo: logo,
  contato: '14 99889-2226'
};

function App() {

  const mostrarNumero = () => {
    alert("O número da " + loja.nome + " é " + loja.contato);
  };

  return (
    <div>
      {/* Menu de navegação da página */}
      <nav>

        {/* Nome da Loja */}
        <span className="nomeLoja">{loja.nome}</span>

        {/* Ícones das Redes Sociais */}
        <div>
          <a href="https://www.instagram.com/" className='link'>
            <Instagram size={30} className='icon' color='#8182b4' />
          </a>
        </div>
        <div>
          <Whatsapp size={30} className='icon' color='#8182b4' onClick={mostrarNumero} style={{ cursor: 'pointer' }} />
        </div>

      </nav>

      <div className='App'>
        {/* 2. CORREÇÃO: Alterado de loja.name para loja.nome */}
        <img src={loja.logo} alt={`Logo da loja ${loja.nome}`} className="logo" />

        {/* 3. CORREÇÃO: Alterado de loja.name para loja.nome */}
        <h1 className='nome-da-loja'>{loja.nome}</h1>
        
        <p className='p-principal'>
          Seu computador está com problemas?<br />
          Nós temos a solução!
        </p>
      </div>

      {/* Seção principal */}
      <main className='conteudo-principal'>
        {/* Lista de serviços */}
        <section>
          <Container />
          <ContainerServicos />
        </section>

      </main>

      <footer className='footer'>
        <p className='contatos'>
          contatos
          <br />
          whatsapp: 14 99889-2226
          <br />
          e-mail: rafael.avare3000@gmail.com
        </p>
      </footer>
    </div>
  )
}

export default App;