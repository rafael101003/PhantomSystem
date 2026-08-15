import "./listaOrcamento.css"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

{/* Container de serviços e valores */}
const SERVICOS = [
    { id: 1, title: 'Análise técnica do Hardware', preco: 30},
    { id: 2, title: 'Limpeza interna e externa', preco: 120},
    { id: 3, title: 'Backup e Formatação', preco: 90},
    { id: 4, title: 'Manutenção Preventiva e Corretiva', preco: 100},
    { id: 5, title: 'Recuperação de arquivos', preco: 120},
    ];
    

function ListaOrcamento() {
    
    const [selecionado, setSelecionado] = useState([]);

    const handleTroca = (id) => {
        if (selecionado.includes(id)) {
            setSelecionado(selecionado.filter(item=>item !== id));
        }else{
            setSelecionado([...selecionado, id]);
        }
    }

    const total = SERVICOS
        .filter(servico => selecionado.includes(servico.id))
        .reduce((soma, servico) => soma + servico.preco, 0);

    console.log(selecionado)



    return(
        <>
            
            <ul className="list-group">
                {SERVICOS.map(service => {
                    
                    const isSelecionado = selecionado.includes(service.id);
                        return (
                            <li
                                key={service.id}
                                onClick={() => handleTroca(service.id)}
                                className={`list-group-item ${isSelecionado ? 'active' : ''}`}
                                style={{ cursor: 'pointer' }}
                            >
                            {service.title} - R$ {service.preco}
                            </li>
                        );
                })}
            </ul>
            <h3 id="totalServico">Total: R$ {total}</h3>
        </>
    );
}

export default ListaOrcamento;