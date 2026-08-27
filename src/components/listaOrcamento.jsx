// 1. React / Hooks
import { useState } from "react";

// 3. Estilos (Bootstrap primeiro, CSS da aplicação depois)
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";

// 4. Componentes Locais
import BotaoWhatsApp from "./BotaoWhatsapp";

// Tabela oficial de serviços
const SERVICOS = [
  { id: 1, title: 'Análise técnica do Hardware', price: 30 },
  { id: 2, title: 'Limpeza interna e externa', price: 120 },
  { id: 3, title: 'Backup e Formatação', price: 90 },
  { id: 4, title: 'Manutenção Preventiva e Corretiva', price: 100 },
  { id: 5, title: 'Recuperação de arquivos', price: 120 },
];

function ListaOrcamento({ nomeCliente }) {
  const [selecionado, setSelecionado] = useState([]);

  // Alterna a seleção do serviço
  const handleTroca = (id) => {
    setSelecionado(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filtra e calcula com base nos dados seguros
  const objetosSelecionados = SERVICOS.filter(servico => selecionado.includes(servico.id));
  const total = objetosSelecionados.reduce((soma, servico) => soma + servico.price, 0);

  return (
    <div className="row g-3 w-100 mx-auto justify-content-center my-3">
      
      <div className="col-12 col-md-7">
        <ul className="list-group">
          {SERVICOS.map(service => {
            const isSelecionado = selecionado.includes(service.id);
            return (
              <li 
                key={service.id}
                onClick={() => handleTroca(service.id)}
                className={`list-group-item d-flex justify-content-between align-items-center ${isSelecionado ? 'active fw-bold' : ''}`}
                style={{ cursor: 'pointer' }}
                id="list-items"
              >
                <span>{service.title}</span>
                <span className="total-item-lista text-white text-end">R$ {service.price.toFixed(2)}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="col-12 col-md-5 mb-4">
        <div id="totalContainer" className="card p-4">
          <h4 className="card-title text-center mb-3">Resumo do Orçamento</h4>
          <h3 className="text-center text-success fw-bold mb-4">
            Total: R$ {total.toFixed(2)}
          </h3>
          
          <BotaoWhatsApp 
            selecionados={objetosSelecionados} 
            total={total}
            nomeCliente={nomeCliente}
          />
        </div>
      </div>

    </div>
  );
}

export default ListaOrcamento;