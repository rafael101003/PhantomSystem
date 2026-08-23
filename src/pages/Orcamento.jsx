import ListaOrcamento from "../components/listaOrcamento"
import Container from "../containments/container";
import "./Orcamento.css"


function Orcamento() {
    return(
        <div className="principal row">
            <ListaOrcamento />
            <Container titulo={"Bem vindo a página de orçamentos"}>
                <p>Ao selecionar os itens da lista clique em 'enviar' para entrar em contato conosco!</p>
            </Container>
        </div>
    );
}

export default Orcamento;