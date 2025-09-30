# Saúde Digital - Portal do Paciente

<!-- Substitua com um screenshot real do seu projeto -->

Este é o repositório do projeto **Saúde Digital**, uma plataforma desenvolvida para a Sprint 3 de Front-End. O objetivo é fornecer um portal completo para pacientes, onde eles podem gerenciar suas consultas médicas, acessar o histórico e utilizar serviços de telemedicina de forma simples e intuitiva.

## ✨ Funcionalidades

O portal conta com as seguintes funcionalidades:

- **Autenticação de Usuários**: Sistema de Cadastro e Login com persistência de dados no `localStorage` do navegador.
- **Gerenciamento de Consultas**: Agende, reagende e cancele consultas de telemedicina de forma prática.
- **Histórico de Consultas**: Visualize o status de todas as suas consultas (agendadas, realizadas, canceladas).
- **Páginas Informativas**: Seções como FAQ, Contato e uma página sobre os integrantes do projeto.
- **Design Responsivo**: Interface que se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
- **Componentização**: O código foi estruturado com componentes reutilizáveis para garantir manutenibilidade e escalabilidade.

---

## ✅ Requisitos da Sprint 03 Cumpridos

Este projeto foi desenvolvido seguindo estritamente os requisitos da Sprint 03, garantindo uma aplicação moderna, modular e de alta qualidade.

- **Arquitetura SPA com React, Vite e TypeScript**:
  - O projeto foi totalmente reestruturado como uma **Single Page Application (SPA)**.
  - Utilizamos **React com Vite e TypeScript**, garantindo um ambiente de desenvolvimento rápido, tipagem estática para segurança do código e uma base sólida para o projeto.

- **Componentização e Modularidade**:
  - Todas as páginas da Sprint 02 foram transformadas em componentes React.
  - Criamos componentes reutilizáveis como `Cabecalho`, `Rodape`, `CardAgendamento`, `CardConsulta`, entre outros, que são usados em múltiplas páginas, facilitando a manutenção e a consistência visual.
  - A estrutura de pastas separa claramente `pages`, `components`, `context` e `assets`, promovendo um código organizado e modular.

- **Navegação e Roteamento**:
  - A navegação entre as páginas é gerenciada pelo **React Router DOM**, permitindo uma experiência de usuário fluida e sem recarregamentos de página.

- **Gerenciamento de Estado e Formulários**:
  - O estado global das consultas é gerenciado de forma centralizada com a **Context API** do React.
  - Os formulários de `Login`, `Cadastro`, `Contato` e `Reagendamento` foram implementados com validações e gerenciamento de estado utilizando os hooks nativos do React (`useState`), cumprindo o requisito de manipulação de dados de entrada do usuário.

- **Estilização com TailwindCSS**:
  - A estilização foi feita exclusivamente com **TailwindCSS**, utilizando um arquivo `globals.css` para centralizar classes semânticas e variáveis de tema, conforme as boas práticas.

---

## 📋 Detalhamento dos Requisitos Avaliativos

Esta seção detalha como o projeto atende aos critérios de avaliação da Sprint 03.

### 1. Construção do Projeto (40,0 pontos)

#### I. Componentização, Modularidade e Reutilização (20,0 pontos)

- **Componentização (10,0 pontos)**: Todos os documentos da Sprint 02 foram reestruturados como uma **SPA (Single Page Application)** utilizando **React, Vite e TypeScript**. A arquitetura é semântica, responsiva e segue as melhores práticas de componentização.
- **Modularidade e Reutilização (10,0 pontos)**:
  - **Identificação e separação clara de componentes (3,3 pontos)**: O projeto possui uma estrutura de pastas clara (`/components`, `/pages`, `/context`), separando responsabilidades.
  - **Facilidade de reutilização (3,3 pontos)**: Componentes como `Cabecalho`, `Rodape`, `CardConsulta` e `Botao` são utilizados em múltiplas partes da aplicação.
  - **Eficiência na manutenção (3,4 pontos)**: A componentização e a centralização de estilos e lógica (contexto) facilitam a manutenção e atualização do projeto.

#### II. Páginas Obrigatórias (20,0 pontos)

Todas as páginas obrigatórias foram implementadas:

- ✅ **Home (Página Inicial)**
- ✅ **Integrantes** (com Nome, RM e Turma)
- ✅ **FAQ (Perguntas Frequentes)**
- ✅ **Contato**
- ✅ **Sobre/About**: Esta seção está contida na página de **FAQ**, sob a categoria "Sobre o Programa", para centralizar as informações institucionais.

### 2. Utilização de Hooks e Rotas (20,0 pontos)

- **`useState()` (2,5 pontos)**: Utilizado em múltiplos componentes para gerenciar o estado local (formulários, controle de UI, etc.).
- **`useNavigate()` (2,5 pontos)**: Utilizado para navegação programática após ações como login, cadastro e reagendamento.
- **`useParams()` (2,5 pontos)**: Utilizado na página de `Reagendar` para capturar o `id` da consulta pela URL.
- **`useEffect()` (2,5 pontos)**: Utilizado em todas as páginas para atualizar o título do documento (`document.title`) e para outras lógicas de ciclo de vida.
- **Props (5,0 pontos)**: As propriedades são amplamente utilizadas para passar dados entre componentes, como nos cards de consulta e de integrantes.
- **Rotas Estáticas e Dinâmicas (5,0 pontos)**: O projeto utiliza rotas estáticas (ex: `/login`) e rotas dinâmicas (ex: `/reagendar/:id`).

### 3. Design e Responsividade (30,0 pontos)

- **Escolha de Cores e Fontes (5,0 pontos)**: A paleta de cores e a tipografia foram definidas em variáveis CSS no arquivo `globals.css`, garantindo consistência visual.
- **Atratividade do Design (5,0 pontos)**: A interface foi projetada para ser limpa, moderna e intuitiva.
- **Responsividade (20,0 pontos)**:
  - **Funcionalidade e aparência adequada (10,0 pontos)**: A aplicação foi testada e se adapta a diferentes dispositivos (desktop, tablet e mobile).
  - **Adequação do layout (10,0 pontos)**: O layout utiliza técnicas de design responsivo (Flexbox, Grid) para reorganizar o conteúdo de forma fluida em diferentes tamanhos de tela.

### 4. Versionamento e Entrega (10,0 pontos)

- **Versionamento no GitHub (10,0 pontos)**: O projeto foi versionado utilizando Git e GitHub, com a participação de todos os integrantes, seguindo as boas práticas de commits.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e padrões:

- **React**: Biblioteca principal para a construção da interface de usuário.
- **TypeScript**: Para adicionar tipagem estática ao JavaScript, aumentando a segurança e a manutenibilidade do código.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e customizável, combinado com CSS puro e variáveis para uma arquitetura de estilos robusta.
- **React Router DOM**: Para o gerenciamento de rotas na aplicação, permitindo a navegação entre as diferentes páginas (SPA).
- **React Context API**: Utilizado para o gerenciamento de estado global, como os dados das consultas, de forma centralizada.
- **Vite**: Ferramenta de build e servidor de desenvolvimento que oferece uma experiência de desenvolvimento extremamente rápida.

---

## ⚙️ Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Ganhadores-do-NEXT-2025/Front_End_Sprint_3.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd SaudeDigital_Sprint_3
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

---

## 📂 Estrutura do Projeto

O código-fonte está organizado da seguinte maneira dentro da pasta `src`:

```
src/
├── assets/         # Imagens, ícones e outros arquivos estáticos
├── components/     # Componentes React reutilizáveis (Cabecalho, Rodape, etc.)
├── context/        # Contextos da aplicação para gerenciamento de estado
├── pages/          # Componentes que representam as páginas da aplicação
├── types/          # Definições de tipos TypeScript
├── App.tsx         # Componente principal que organiza as rotas
├── globals.css     # Estilos globais e configuração do Tailwind CSS
└── main.tsx        # Ponto de entrada da aplicação React
```

---

## Video explicativo sobre o projeto

Abaixo contamos com um vídeo explicativo sobre o projeto postado na plataforma do YouTube.

https://youtu.be/eCoVsrdpV3c?si=ftzJ1NGyTKalPGx4