# 💻 Phantom System - Gestão de Orçamentos & Serviços

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

O **Phantom System** é uma aplicação web voltada para a simulação, orçamento e solicitação de serviços de assistência técnica e manutenção de hardware. O foco do sistema é proporcionar uma experiência fluida de escolha de serviços com cálculo dinâmico e integração direta ao WhatsApp.

---

## 🎨 Identidade Visual & UX

- **Estética Dark/Tech:** Cores padronizadas com foco na identidade visual da marca (tons `#8182b4` e fundo escuro).
- **Design Responsivo Avançado:** Interface adaptada para smartphones, tablets e telas de alta resolução.
- **Acessibilidade (a11y):** Suporte nativo à navegação via teclado, leitores de tela e estados de foco visíveis.

---

## ✨ Funcionalidades Principais

- ⚙️ **Calculadora de Orçamento em Tempo Real:** Seleção dinâmica de serviços com cálculo instantâneo do valor total.
- 📱 **Integração Direct-to-WhatsApp:** Envio da lista formatada de serviços e orçamento estimado diretamente para o WhatsApp do técnico.
- 🌐 **Navegação SPA (Single Page Application):** Transições de tela sem recarregamento de página via React Router DOM.
- ♿ **Acessibilidade Completa:** Elementos interativos habilitados com atributos ARIA e suporte a teclas `Enter`/`Space`.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Roteamento:** [React Router DOM v6](https://reactrouter.com/)
- **Estilização:** [Bootstrap 5](https://getbootstrap.com/) + CSS3 Custom Properties (`src/index.css`)
- **Ícones:** [React Bootstrap Icons](https://icons.getbootstrap.com/)
- **Hospedagem:** [Vercel](https://vercel.com/)

---

## 📂 Estrutura do Projeto

```text
├── public/                 # Arquivos estáticos (favicon, manifest)
├── src/
│   ├── assets/             # Imagens e logotipos do projeto
│   ├── components/         # Componentes reutilizáveis (Navbar, Footer, Botão WhatsApp)
│   ├── pages/              # Páginas da aplicação (Home, Orçamento)
│   ├── index.css           # Estilos globais e variáveis de temas
│   ├── App.jsx             # Definição e roteamento da aplicação
│   └── main.jsx            # Ponto de entrada do React
├── vercel.json             # Configuração de reescrita de rotas para SPA
├── vite.config.js          # Configurações do ambiente de compilação
└── package.json            # Gerenciamento de dependências