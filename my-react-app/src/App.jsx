import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';
import Container from './containments/container';

import { Instagram, Whatsapp } from 'react-bootstrap-icons';

import Orcamento from './pages/Orcamento.jsx';

const loja = {
  nome: 'Phantom System',
  logo: logo,
  contato: '14 99889-2226'
};

function Home() {
  return(
    <>
      <div className='App'>
        <img src={loja.logo} alt={`Logo da loja ${loja.nome}`} className="logo" />
        <h1 className='nome-da-loja'>{loja.nome}</h1>
        <p className='p-principal'>Seu computador está com problemas?<br />Nós temos a solução!</p>
      </div>

      <main className='conteudo-principal'>
          {/* Lista de serviços */}
          <section>
            <Container />
          </section>
      </main>
    </>
  );
}

function App() {

  const mostrarNumero = () => {
    alert("O número da " + loja.nome + " é " + loja.contato);
  };

  return (
    <div>
      <nav>
        {/* Nome da Loja */}
        <span className="nomeLoja">{loja.nome}</span>

        <Link to="/Orcamento" id='orcamento' className="btn btn-primary" >
          Orçamento
        </Link>

        <Link to="/" id='home' className='btn btn-primary'>
          Home
        </Link>

        {/* Ícones das Redes Sociais */}
        <div>
          <a href="https://www.instagram.com/" className='link'>
            <Instagram 
              size={30}
              className='icon' 
              color='#8182b4' 
            />
          </a>
        </div>
        <div>
          <Whatsapp   
            size={30}
            className='icon' 
            color='#8182b4' 
            onClick={mostrarNumero} 
            style={{ cursor: 'pointer' }} 
          />
        </div>
      </nav>

      {/* Gerenciador de rotas*/}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Orcamento" element={<Orcamento/>} />
      </Routes>

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