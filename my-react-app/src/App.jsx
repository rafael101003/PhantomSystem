import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Instagram, Whatsapp } from 'react-bootstrap-icons';
import logo from './assets/logo.png';
import Container from './containments/container';
import Footer from './components/footer.jsx';
import Orcamento from './pages/Orcamento.jsx';

const loja = {
  nome: 'Phantom System',
  logo: logo,
  contato: '14 99889-2226'
};

function Home() {
  return(
    <div className='d-flex flex-column justify-content-center align-items-center text-center gap-3 '>
      <img src={loja.logo} alt={`Logo da loja ${loja.nome}`} className="logo" />
      <h1 className='nome-da-loja'>{loja.nome}</h1>
      <p className='p-principal'>Seu computador está com problemas?<br />Nós temos a solução!</p>


      {/* Lista de serviços */}
      <section>
        <Container />
      </section>
    </div>
  );
}

function App() {

  const mostrarNumero = () => {
    alert("O número da " + loja.nome + " é " + loja.contato);
  };

  return (
    <div className='d-flex flex-column min-vh-100'>
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
      <main className='flex-grow-1 '>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Orcamento" element={<Orcamento/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App;