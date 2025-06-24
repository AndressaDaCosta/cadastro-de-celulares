# Cadastro e Listagem de Celulares

Um sistema web para cadastro e visualização de aparelhos celulares para venda, com layout responsivo usando CSS Flexbox.

## Descrição

Este projeto consiste em duas páginas web:

### 1. Página de Cadastro

Um formulário para cadastro de celulares com os seguintes campos:

-   Marca (select com opções: Samsung, iPhone, Motorola, LG, etc.)
-   Modelo (input de texto)
-   Cor (input de texto)
-   Valor (input numérico)
-   Estado (radio buttons: Novo / Usado)
-   Demais informações (textarea)

E os botões:

-   Salvar
-   Voltar
-   Ver Listagem (redireciona para a página de listagem)

### 2. Página de Listagem

Uma tabela responsiva que exibe os celulares cadastrados com as seguintes colunas:

-   Marca
-   Modelo
-   Cor
-   Valor
-   Estado (Novo/Usado)
-   Demais informações

E os botões:

-   Voltar (para a página de cadastro)
-   Adicionar Celular (redireciona para o formulário)

## Recursos Implementados

-   **Formulário de Cadastro**: Interface interativa para inserção de dados
-   **Tabela de Listagem**: Visualização organizada dos dados cadastrados
-   **Armazenamento Local**: Salva os dados no localStorage do navegador
-   **Layout Responsivo**: Adapta-se a diferentes tamanhos de tela
-   **CSS Flexbox**: Utilizado para criar layouts flexíveis e responsivos
-   **Formatação de Dados**: Formata valores monetários automaticamente
-   **Validação de Formulário**: Assegura que dados obrigatórios sejam inseridos

## Tecnologias Utilizadas

-   HTML5
-   CSS3 (com foco em Flexbox para layout)
-   JavaScript (vanilla)
-   Web Storage API (localStorage)

## Estrutura do Projeto

O projeto é composto por:

-   `index.html`: Página com o formulário de cadastro
-   `listagem.html`: Página com a tabela de listagem dos celulares
-   `styles.css`: Estilização das páginas usando CSS Flexbox
-   `script.js`: Lógica para manipulação do formulário e exibição dos dados

## Como executar

1. Clone ou faça o download deste repositório
2. Abra o arquivo `index.html` em um navegador web para acessar o formulário de cadastro
3. Use o botão "Ver Listagem" para visualizar os celulares cadastrados
4. Os dados inseridos serão armazenados no localStorage do navegador

## Layout Responsivo

O projeto utiliza CSS Flexbox para criar um layout responsivo que:

-   Se adapta a diferentes tamanhos de tela
-   Reorganiza os elementos em dispositivos móveis
-   Transforma a tabela em cards em telas pequenas
-   Mantém uma experiência de usuário consistente em todos os dispositivos

## Detalhes da Implementação com CSS Flexbox

### Conceitos de Flexbox Aplicados

O projeto utiliza diversos conceitos de CSS Flexbox para criar layouts dinâmicos e responsivos:

1. **Contêineres Flex**:

    - `display: flex` - Aplicado em elementos como body, container, table e rows
    - `flex-direction` - Utilizado para definir o fluxo dos elementos (column/row)
    - `flex-wrap` - Permite que os elementos quebrem de linha quando necessário

2. **Alinhamento**:

    - `justify-content` - Para alinhamento no eixo principal (horizontal em rows)
    - `align-items` - Para alinhamento no eixo transversal (vertical em rows)

3. **Distribuição de Espaço**:
    - `flex` - Propriedade que define a capacidade de crescimento, encolhimento e tamanho base
    - `gap` - Espaçamento uniforme entre elementos flex
