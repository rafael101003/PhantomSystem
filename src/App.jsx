// Bibliotecas e Estilos Externos
import { Routes, Route, Link } from 'react-router-dom';
import { Instagram } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

// Páginas
import Home from './pages/Home.jsx';
import Orcamento from './pages/Orcamento.jsx';

// Componentes
import Footer from './components/footer.jsx';

// Estilos Locais
import './App.css';


function App() {

  const loja = {nome: 'Pantom System'};

  return (
    <div className='d-flex flex-column min-vh-100'>
      <nav>

        {/* Nome da Loja */}
        <span className="nomeLoja">{loja.nome}</span>

        <Link to="/Orcamento" id='orcamento' className='btn btn-outline-light'>Orçamento</Link>
        <Link to="/Home" id='home' className='btn btn-outline-light'>Home</Link>

        {/* Ícones das Redes Sociais */}
        <div>
          <a
            href="https://www.instagram.com/"
            target='_blank'
            rel='notrefferer'
            className="d-flex align-items-center text-decoration-none"
          >
            <Instagram size={30} className='icon'color='#8182b4' />
          </a>
        </div>
      </nav>

      {/* Gerenciador de rotas*/}
      <main className='flex-grow-1 '>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Orcamento" element={<Orcamento />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;