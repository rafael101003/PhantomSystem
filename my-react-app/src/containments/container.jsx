import './container.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useEffect, useState } from 'react';

const servicos = [
  { title: 'Análise técnica do Hardware', isService: true, id: 1 },
  { title: 'Limpeza interna e externa', isService: true, id: 2 },
  { title: 'Backup e Formatação', isService: true, id: 3 },
  { title: 'Manutenção Preventiva e Corretiva', isService: true, id: 4 },
  { title: 'Recuperação de arquivos', isService: true, id: 5 },
];

// 1. Mudança para Letra Maiúscula (Container)
function Container() {
  
    //================================================
  // Efeito fade-in para container
  //==================================================
  const container1Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Mantém a animação apenas na primeira vez
        }
      },
      {
        threshold: 0.1 // Dispara quando 10% do container aparecer
      }
    );

    if (container1Ref.current) {
      observer.observe(container1Ref.current);
    }

    return () => observer.disconnect();
  }, []);
  //================================================
  // Fim do efeito fade-in
  //================================================ 

  return (
    <div>
      <main className='conteudo-principal'>
        <div className={`container1 fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={container1Ref}>
          <h2>Serviços Disponíveis</h2>

          <ul>
            {/* 2. Ajustado de services para service (singular) */}
            {servicos.map(service => (
              <li
                className='list1'
                key={service.id}
                style={{ color: service.isService ? '#8182b4' : 'darkgreen' }}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div> 
      </main>      
    </div>
  );
}

export default Container;