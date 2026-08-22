import logo from '../assets/logo.png';
import Container from '../containments/container';


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

      <img src={loja.logo} alt={`Logo da loja ${loja.nome}`} className="logo m-3"/>

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

export default Home;