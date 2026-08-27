import logo from '../assets/logo.png';

// Informações da loja
const loja = {
  nome: 'Phantom System',
  logo: logo,
  contato: '14 99889-2226'
};

function Home() {

  return(
    <div className='d-flex flex-column justify-content-center align-items-center text-center gap-3 '>

      <img src={loja.logo} alt={`Logo da loja ${loja.nome}`} className="logo m-3"/>

      <p className='p-principal'>Seu computador está com problemas?<br />Nós temos a solução!</p>
    </div>
  );
}

export default Home;