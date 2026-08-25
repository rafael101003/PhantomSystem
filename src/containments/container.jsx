import "../index.css"

function Container({children, titulo}) {
  return(
    <div className="container mt-4 mb-4">
      
      {/* Exemplo: Se passar a prop 'titulo', renderiza um cabeçalho fixo */}
      {titulo && (<h3 className="card-title text-center">{titulo}</h3>)}

      <div className="d-flex flex-column gap-3 text-center card-body ">
        {children}
      </div>

    </div>
  );
}

export default Container;