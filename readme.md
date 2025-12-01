# SpSkills - Landing Page de Competição de Habilidades

O projeto **SpSkills** é uma **landing page estática** desenvolvida para promover uma competição regional de educação profissional, provavelmente relacionada à **WorldSkills** ou a um evento similar de habilidades técnicas e profissionais.

## 1. Stack Tecnológica

O projeto adota uma pilha de tecnologia **Front-end pura**, focada em desempenho e interatividade através de recursos nativos do navegador.

| Categoria | Tecnologia | Detalhamento |
| :--- | :--- | :--- |
| **Estrutura** | **HTML5** | Utilizado para a estruturação semântica do conteúdo. |
| **Estilização** | **CSS Puro (Vanilla CSS)** | A estilização é feita com CSS nativo, sem o uso de frameworks ou pré-processadores, garantindo controle total sobre o design e otimização de carregamento. |
| **Interatividade** | **JavaScript Puro (Vanilla JS)** | Implementa a lógica de interatividade da página, como a reprodução de vídeo e a animação de elementos ao entrar na área visível (efeito *scroll reveal*), utilizando a API `IntersectionObserver`. |
| **Recursos Visuais** | **Vídeo e Animações** | O código JavaScript sugere a presença de um elemento de vídeo que é controlado dinamicamente, além de animações de transição para os cartões de modalidades. |

## 2. Propósito e Conteúdo

A página tem como objetivo principal apresentar o evento, suas modalidades e os resultados da competição.

*   **Propósito:** Promover uma competição regional de habilidades profissionais e apresentar as modalidades de TI e tecnologia.
*   **Conteúdo Principal (Inferido do `index.html`):**
    *   **Seção "Sobre":** Apresenta a competição como "a maior competição regional de educação profissional da América Latina".
    *   **Seção "Modalidades":** Detalha as diferentes áreas de competição, com foco em TI e tecnologia, como:
        *   Desenvolvimento de Aplicativos Móveis
        *   Soluções de Software para Negócios
        *   Tecnologias Web
        *   Gestão de Sistemas de Redes TI
        *   Modelagem 3D para Jogos
        *   Computação em Nuvem
    *   **Seção "Competidores/Campeões":** Apresenta os resultados e os representantes da delegação paulista.

## 3. Características de Desenvolvimento

*   **Foco em Performance:** A ausência de grandes frameworks e o uso de Vanilla JS e CSS contribuem para um carregamento rápido e eficiente.
*   **Interatividade Moderna:** O uso da API `IntersectionObserver` no `script.js` é uma técnica moderna para criar efeitos visuais de forma performática, ativando a reprodução de vídeo e as animações de entrada dos elementos somente quando eles se tornam visíveis na tela.
*   **Estrutura de Código:** O projeto é bem estruturado com arquivos separados para HTML (`index.html`), CSS (`styles.css`) e JavaScript (`script.js`), facilitando a manutenção e o desenvolvimento.

## 4. Observação Importante

O repositório continha um arquivo `readme.txt` com a seguinte nota:
> "Por conta da falta de internet a entrega deste projeto foi feita localmente. Portanto entre na pasta do projeto do competidor e inicie o projeto localmente no chrome."

Esta nota sugere que o projeto foi desenvolvido em um ambiente com restrição de internet, o que reforça a escolha por uma arquitetura simples e sem dependências externas complexas.
