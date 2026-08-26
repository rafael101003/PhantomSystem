import { useState } from "react";

function Input() {

    const [inputCliente, setInputCliente] = useState('');

    const clienteNome = (e) => {
        e.preventDefault();

        if(inputCliente.trim().length === 0) {
            console.log("adicione um nome");
            return;
        }

        console.log(inputCliente);

        setInputCliente('');
    }

    return(
        <div className="text-white">
        <form>
            <input  
                type="text"
                value={inputCliente}
                onChange={(e) => setInputCliente(e.target.value)}
            />
            <button onClick={clienteNome} type="submit">enviar</button>
        </form>
        </div>
    );
}

export default Input;