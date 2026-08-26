import { useState } from "react";
import ListaOrcamento from "../components/listaOrcamento"
import Input from "../containments/input.jsx";
import "../index.css"


function Orcamento() {
    const [nomeCliente, setNomeCliente] = useState('');

    return(
        <div className="principal row col-10 col-lg-8">
            <Input onSalvarNome={setNomeCliente} nomeAtual={nomeCliente} />
            <ListaOrcamento  nomeCliente={nomeCliente} />
        </div>
    );
}

export default Orcamento;