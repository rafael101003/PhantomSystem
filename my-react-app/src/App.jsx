import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Instagram, Whatsapp } from 'react-bootstrap-icons';
import logo from './assets/logo.png';
import Container from './containments/container';
import Footer from './components/footer.jsx';
import Orcamento from './pages/Orcamento.jsx';
import Administrador from './pages/administrador.jsx'

// Informações da loja
const loja = {
  nome: 'Phantom System',
  logo: logo,
  contato: '14 99889-2226'
};

// Lista de serviços
const servicos = [
  { id: 1, title: 'Análise técnica do Hardware'},
  { id: 2, title: 'Limpeza interna e externa'},
  { id: 3, title: 'Backup e Formatação'},
  { id: 4, title: 'Manutenção Preventiva e Corretiva'},
  { id: 5, title: 'Recuperação de arquivos'},
]

function Home() {

  const mostrarListaServicos = servicos.map(item =>(
    <li
    key={item.id}
    className='list-group'>{item.title}</li>
  ));

  return(
    <div className='d-flex flex-column justify-content-center align-items-center text-center gap-3 '>
      <img src={loja.logo} alt={`Logo da loja ${loja.nome}`} className="logo" />
      <h1 className='nome-da-loja'>{loja.nome}</h1>
      <p className='p-principal'>Seu computador está com problemas?<br />Nós temos a solução!</p>


      {/* Lista de serviços */}
      <section>
        <Container titulo={'Serviços Prestados'}>
          <ul className='text-center p-3  w-auto'>
            {mostrarListaServicos}
          </ul>
        </Container>
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

        <Link to="/Administrador" id='Adm' className='btn btn-primary'>
          Adm
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
          <Route exact path="/Orcamento" element={<Orcamento />} />
          <Route exact path="/Administrador" element={<Administrador />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App;