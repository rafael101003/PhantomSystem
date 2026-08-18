const telefone = "5514998892226"

function BotaoWhatsApp({selecionados = [], total=0}){

    const enviarMensagem = () => {

        if(selecionados.length === 0) return console.log("opa");

        const itensSelecionados =
        selecionados
        .map (item => `*${item.title}*: R$ ${item.price.toFixed(2)}`)
        .join('\n');

        const mensagemMontada =
        `*Olá, quero solicitar um orçamento destes serviços\n\n` +
        `${itensSelecionados}\n\n` +
        `*Total estimado:* R$ ${total.toFixed(2)}`

        const mensagemCodificada = encodeURIComponent(mensagemMontada);

        const whatsapLink = `https://wa.me/${telefone}?text=${mensagemCodificada}`;

        window.open(whatsapLink);
    };

    const semServico = selecionados.length === 0;

    return(
        <button
        onClick={enviarMensagem}
        className={`btn ${semServico ? 'btn-secondary' : 'btn-success'} w-100 mt-3`}>
            enviarMensagem
        </button>
    );
}

export default BotaoWhatsApp;