import { useState} from "react";
import "../index.css";

function Input({ onSalvarNome, nomeAtual }) {
  const [inputCliente, setInputCliente] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const clienteNome = (e) => {
    e.preventDefault();

    const nomeFormatado = inputCliente.trim();
    
    // Reseta as mensagens a cada tentativa
    setMensagemSucesso('');
    setMensagemErro('');

    // 1. Validação de campo vazio
    if (nomeFormatado.length === 0) {
      setMensagemErro('Insira um nome!');
      return;
    }
    
    // 2. Validação de nome duplicado
    if (nomeAtual && nomeFormatado.toLowerCase() === nomeAtual.toLowerCase()) {
      setMensagemErro('Seu nome já foi adicionado!');
      return;
    }

    fetch('http://localhost:3000/api/orcamento',{
      method: 'POST',
      headers: {
        'content-type':'application/json',
      },
      body: JSON.stringify({nomeFormatado}) // Transforma objeto javascript em string

    })
      .then((resposta) => {
        if(!resposta.ok){
          throw new error('Erro ao salvar o usuário');
        } 
        return resposta.json();
      })
      .then((dadosSalvos) => {
        console.log('Usuário cadastrado com sucesso');
        
        // Limpa os dados antes de enviar novos
        setMensagemSucesso('Nome inserido com sucesso!');
        setInputCliente('');
        onSalvarNome(nomeFormatado);
      })
      .catch((erro) => {
        console.error('Houve um problema ao cadastrar usuário', erro);
        setMensagemErro('Não foi possivel se conectar ao servidor');
      });
  };

  return (
    <div className="w-100 text-white">

        {/* Alertas de validação */}
        {mensagemErro && <div className="alert alert-warning py-2 mt-2 mb-2 small">{mensagemErro}</div>}
        {mensagemSucesso && <div className="alert alert-info py-2 mt-2 mb-2 small">{mensagemSucesso}</div>}

        <form className="d-flex flex-column flex-sm-row gap-2 w-100" onSubmit={clienteNome}>
            <input
            placeholder="Insira seu nome..."
            className="form-control form-control-lg input-cliente"
            type="text"
            value={inputCliente}
            onChange={(e) => setInputCliente(e.target.value)}
            />
            <button className="btn btn-primary button-cliente text-nowrap py-2 px-4" type="submit">
            Enviar
            </button>
        </form>

        {/* Indicador de nome registrado */}
        {nomeAtual && (
            <div className="mt-2 text-info small">
            Cliente identificado: <strong>{nomeAtual}</strong>
            </div>
        )}
    </div>
  );
}

export default Input;