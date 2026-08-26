import ListaOrcamento from "../components/listaOrcamento"
import Container from "../containments/container.jsx";
import Input from "../containments/input.jsx";
import "../index.css"


function Orcamento() {
    return(
        <div className="principal row col-10 col-lg-8">
            <ListaOrcamento />
            <Container titulo={"Bem vindo a página de orçamentos"}>
                <p>Ao selecionar os itens da lista clique em 'enviar' para entrar em contato conosco!</p>
            </Container>
            <Input />
        </div>
    );
}

export default Orcamento;