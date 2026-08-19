import "./container.css"

function Container({children, titulo}) {
  return(
      <div className="container d-flex flex-column mb-4 mt-4 w-100 p-5">
      
      {/* Exemplo: Se passar a prop 'titulo', renderiza um cabeçalho fixo */}
      {titulo && (<h3 className="card-title text-center p-2">{titulo}</h3>)}

      <div className="d-flex flex-column gap-3 text-center card-body p-2 ">
        {children}
      </div>

    </div>
  );
}

export default Container;