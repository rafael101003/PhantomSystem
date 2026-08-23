import { useState } from "react";

const administradores = [
    {id:1, usuario:'Rafael', senha:'123'}
]

function Administrador(){
    {/* Memoria temporaria do component */}
    const[inputUsuario, setInputUsuario] = useState('');
    const[inputSenha, setInputSenha] = useState('');
    const[mensagemErro, setMensagemErro] = useState('');
    const[usuarioLogado, setUsuarioLogado] = useState(null);

    const validarLogin = (e) => {
        e.preventDefault();

        const usuarioEncontrado = administradores.find((item) => inputUsuario === item.usuario && inputSenha === item.senha);
        if (usuarioEncontrado){
            setUsuarioLogado(usuarioEncontrado);
            setMensagemErro('');
            console.log(administradores);
        } else { 
            setMensagemErro('usuário admin não existe')
        };
    }
    
    

    const Logout = () => {
        setUsuarioLogado(null);
        setInputUsuario('');
        setInputSenha('');
    };

    if(!usuarioLogado) {
        return(
            <div className="d-flex align-items-center">
                {mensagemErro && <div className="alert alert-danger">{mensagemErro}</div>}
                <form onSubmit={validarLogin}>
                    <div className="mb-3">
                        <label className="usuario text-white">usuario</label>
                        <input  
                            placeholder="Insira seu usuario adm..."
                            type="text"
                            className="form-control"
                            value={inputUsuario}
                            onChange={(e) => setInputUsuario(e.target.value)}
                        />
                        <label className="senha text-white mt-2 shadow-black-5">senha</label>
                        <input 
                            placeholder="Insira sua senha adm..."
                            type="password"
                            className="form-control"
                            value={inputSenha}
                            onChange={(e) => setInputSenha(e.target.value)} 
                        />
                        <button type="submit" className="btn btn-secondary mt-2">Login</button>
                    </div>
                </form>
            </div>
        );
    }
    return (
            <div className="container m-4 p-5 text-white">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>Painel do Administrador</h2>
                    <button onClick={Logout} className="btn btn-danger">Sair</button>
                </div>
                <p>Bem-vindo, {usuarioLogado.usuario}!</p>
            </div>
    );
}


export default Administrador;