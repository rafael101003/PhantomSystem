import { useState } from "react";

const ddd = "14";
const parte1 = "99889";
const parte2 = "2226";

function BotaoWhatsApp({ selecionados = [], total = 0, nomeCliente = '' }) {
  const [mensagemErro, setMensagemErro] = useState('');

  const enviarWhatsApp = () => {

    console.log("Dados enviados do React -> Nome:", nomeCliente, "Total:", total);

    if (!nomeCliente || nomeCliente.trim() === '') {
      alert("Por favor digite um nome e clique em 'enviar' para confirmar");
      return;
    }

    if (selecionados.length === 0) {
      alert("Por favor, selecione ao menos um serviço para continuar.");
      return;
    }

    fetch('/api/orcamento', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ 
        nome: nomeCliente,
        total: Number(total)
      }) 
    })
      .then((resposta) => {
        if (!resposta.ok) {
          return resposta.json().then((dadosDoErro) => {
            throw new Error(dadosDoErro.erro || 'Erro ao cadastrar orçamento');
          });
        } 
        return resposta.json();
      })
      .then((dadosSalvos) => {
        console.log('Orçamento cadastrado com sucesso no Supabase!', dadosSalvos);
        setMensagemErro('');
      })
      .catch((erro) => {
        console.error('Houve problema ao enviar orçamento:', erro);
        setMensagemErro(erro.message);
      });

    const lista = selecionados
      .map(item => `• *${item.title}*: R$ ${item.price.toFixed(2)}`)
      .join('\n');

    const mensagem = 
      `*Solicitação de Orçamento - Phantom System*\n\n` +
      `*Cliente: ${nomeCliente}*\n\n` +
      `*Serviços selecionados:*\n${lista}\n\n` +
      `*Total estimado:* R$ ${total.toFixed(2)}`;

    const link = `https://wa.me/55${ddd}${parte1}${parte2}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      {mensagemErro && <div className="alert alert-danger py-2 small text-center">{mensagemErro}</div>}
      <button 
        onClick={enviarWhatsApp}
        className="btn btn-success btn-lg w-100 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
      >
        <span>Enviar para o WhatsApp</span>
      </button>
    </div>
  );
}

export default BotaoWhatsApp;