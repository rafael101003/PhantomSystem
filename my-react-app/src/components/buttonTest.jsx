import { useState} from "react"

function Teste(){

    const[data, setData] = useState('')

    const buscarMensagem = () => {
        fetch('http://localhost:3001/api')
            .then((res) => res.json())
            .then((data) => setData(data.message))
            .catch((erro) => console.error("Erro:", erro));
    };

    return(
        <div>
            <button onClick={buscarMensagem}>clique</button>
            {data && <div>mensagem do back-end{data}</div>}
        </div>
    );
}

export default Teste;