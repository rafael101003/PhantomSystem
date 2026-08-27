import { useState } from "react";
import ListaOrcamento from "../components/listaOrcamento";
import Input from "../containments/input.jsx";

function ContainerBox() {
  const [nomeCliente, setNomeCliente] = useState('');

  return (
    <div className="container-box d-flex flex-column gap-4 p-3 p-md-4 rounded-4 ">
      {/* Seção do Input de Nome */}
      <section className="w-100">
        <Input onSalvarNome={setNomeCliente} nomeAtual={nomeCliente} />
      </section>

      {/* Seção da Lista e do Botão do WhatsApp */}
      <section className="w-100">
        <ListaOrcamento nomeCliente={nomeCliente} />
      </section>
    </div>
  );
}

export default ContainerBox;