import ContainerBox from "../containments/containerBox";
import "../index.css";

function Orcamento() {
  return (
    <main className="orcamento container min-vh-100 py-4 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-100 justify-content-center">
        {/* Define a largura máxima adaptável para telas grandes e 100% para celulares */}
        <div className="col-12 col-md-10 col-lg-8">
          <ContainerBox />
        </div>
      </div>
    </main>
  );
}

export default Orcamento;