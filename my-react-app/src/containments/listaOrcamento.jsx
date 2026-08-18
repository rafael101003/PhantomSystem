import "./listaOrcamento.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BotaoWhatsApp from "../components/botaoWhatsapp";

/* Container de serviços e valores */
const SERVICOS = [
    { id: 1, title: 'Análise técnica do Hardware', price: 30 },
    { id: 2, title: 'Limpeza interna e externa', price: 120 },
    { id: 3, title: 'Backup e Formatação', price: 90 },
    { id: 4, title: 'Manutenção Preventiva e Corretiva', price: 100 },
    { id: 5, title: 'Recuperação de arquivos', price: 120 },
];

function ListaOrcamento() {
    // Guarda o array de IDs selecionados (ex: [1, 2])
    const [selecionado, setSelecionado] = useState([]);

    const handleTroca = (id) => {
        if (selecionado.includes(id)) {
            setSelecionado(selecionado.filter(item => item !== id));     
        } else {
            setSelecionado([...selecionado, id]);
        }
    };

    // 1. Filtra os objetos completos dos serviços que estão selecionados
    const objetosSelecionados = SERVICOS.filter(servico => selecionado.includes(servico.id));

    // 2. Calcula o valor total
    const total = objetosSelecionados.reduce((soma, servico) => soma + servico.price, 0);

    return (
        <div className="row justify-content-center align-items-start g-4 mt-2">
            
            {/* Coluna da Esquerda: Lista de Serviços */}
            <div className="col-12 col-md-7 col-lg-7">
                <ul className="list-group">
                    {SERVICOS.map(service => {
                        const isSelecionado = selecionado.includes(service.id);
                        return (
                            <li 
                                key={service.id}
                                onClick={() => handleTroca(service.id)}
                                className={`list-group-item ${isSelecionado ? 'active' : ''}`}
                                style={{ cursor: 'pointer', color: isSelecionado ? '#fff' : '#8182b4'}}
                            >
                                {service.title} - R$ {service.price.toFixed(2)}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
                <div id="totalContainer">
                    <h4 className="card-title text-center mb-3">Resumo do Orçamento</h4>
                    <h3 className="text-center text-success fw-bold">Total: R$ {total.toFixed(2)}</h3>
                    <BotaoWhatsApp 
                        selecionados={objetosSelecionados} 
                        total={total} 
                    />
                </div>
            </div>

        </div>
    );
}

export default ListaOrcamento;