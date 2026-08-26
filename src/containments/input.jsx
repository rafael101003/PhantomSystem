import { useState } from "react";
import "../index.css"

function Input({onSalvarNome, nomeAtual}) {

    const [inputCliente, setInputCliente] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const clienteNome = (e) => {
        e.preventDefault();

        if(inputCliente.trim().length === 0) {
            setMensagemErro('Insira um nome');
            return;
        }

        setMensagemErro('');
        setInputCliente('');
        onSalvarNome(inputCliente.trim());
    }

    return(
        <div className="text-white mt-4">
        {mensagemErro && <div className="alert alert-danger">{mensagemErro}</div>}
        <form className="d-flex gap-2">
            <input
                placeholder="Insira seu nome..."
                className="input-cliente"
                type="text"
                value={inputCliente}
                onChange={(e) => setInputCliente(e.target.value)}
            />
            <button className="button-cliente" onClick={clienteNome} type="submit">enviar</button>
        </form>

        {nomeAtual && (<div><p><strong>{nomeAtual}</strong></p></div>)}
        </div>
    );
}

export default Input;