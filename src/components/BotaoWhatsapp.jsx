const ddd = "14";
const parte1 = "99889";
const parte2 = "2226";

function BotaoWhatsApp({ selecionados = [], total = 0 }) {
  const enviarWhatsApp = () => {
    if (selecionados.length === 0) {
      alert("Por favor, selecione ao menos um serviço para continuar.");
      return;
    }

    const lista = selecionados
      .map(item => `• *${item.title}*: R$ ${item.price.toFixed(2)}`)
      .join('\n');

    const mensagem = 
      `*Solicitação de Orçamento - Phantom System*\n\n` +
      `*Serviços selecionados:*\n${lista}\n\n` +
      `*Total estimado:* R$ ${total.toFixed(2)}`;

    const link = `https://wa.me/55${ddd}${parte1}${parte2}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={enviarWhatsApp}
      className="btn btn-success btn-lg w-100 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
    >
      <span>Enviar para o WhatsApp</span>
    </button>
  );
}

export default BotaoWhatsApp;