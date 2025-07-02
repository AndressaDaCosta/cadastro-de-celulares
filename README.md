# 📱 Sistema de Cadastro de Celulares

Um sistema web moderno e responsivo para cadastro, listagem e gerenciamento de celulares, desenvolvido com HTML, CSS e JavaScript puro.

## 🚀 Funcionalidades

### ✨ Principais Recursos

-   **📝 Cadastro de Celulares**: Formulário completo com validação
-   **📋 Listagem Dinâmica**: Visualização organizada em tabela responsiva
-   **🔍 Pesquisa em Tempo Real**: Busca por marca ou modelo
-   **✏️ Edição de Registros**: Alterar dados de celulares cadastrados
-   **🗑️ Exclusão de Registros**: Remover celulares do sistema
-   **🌙 Tema Escuro/Claro**: Alternância entre temas com persistência
-   **💾 Armazenamento Local**: Dados salvos no localStorage do navegador
-   **📱 Interface Responsiva**: Otimizada para desktop e mobile

### 🎨 Interface Moderna

-   **Ícones Intuitivos**: Botões com emojis e símbolos visuais
-   **Gradientes e Animações**: Efeitos visuais suaves
-   **Design Clean**: Interface minimalista e profissional
-   **Feedback Visual**: Animações de hover e transições

## 🏗️ Estrutura do Projeto

```
cadastro-de-celulares/
├── index.html          # Página de cadastro
├── listagem.html       # Página de listagem
├── script.js          # Lógica JavaScript
├── styles.css         # Estilos CSS
└── README.md          # Documentação
```

## 🛠️ Tecnologias Utilizadas

-   **HTML5**: Estrutura semântica das páginas
-   **CSS3**: Estilos modernos com gradientes, animações e responsividade
-   **JavaScript ES6+**: Lógica de negócio e manipulação do DOM
-   **localStorage**: Persistência de dados no navegador

## 📋 Campos de Cadastro

| Campo           | Tipo     | Obrigatório | Descrição                                     |
| --------------- | -------- | ----------- | --------------------------------------------- |
| **Marca**       | Select   | ✅          | Samsung, iPhone, Motorola, LG, Xiaomi, Huawei |
| **Modelo**      | Text     | ✅          | Nome do modelo do celular                     |
| **Cor**         | Text     | ✅          | Cor do aparelho                               |
| **Valor**       | Number   | ✅          | Preço em reais (R$)                           |
| **Estado**      | Radio    | ✅          | Novo ou Usado                                 |
| **Informações** | Textarea | ❌          | Detalhes adicionais                           |

## 🎯 Como Usar

### 1. **Cadastrar um Celular**

1. Acesse `index.html`
2. Preencha todos os campos obrigatórios
3. Clique em "💾 Salvar"
4. Será redirecionado para a listagem

### 2. **Visualizar Celulares**

1. Acesse `listagem.html`
2. Veja todos os celulares cadastrados
3. Use a pesquisa para filtrar por marca/modelo

### 3. **Editar um Celular**

1. Na listagem, clique no ícone "✏️" do celular desejado
2. Será redirecionado para o formulário preenchido
3. Altere os dados necessários
4. Clique em "💾 Atualizar"

### 4. **Excluir um Celular**

1. Na listagem, clique no ícone "🗑️" do celular desejado
2. Confirme a exclusão na caixa de diálogo

### 5. **Alternar Tema**

1. Clique no botão circular no canto superior direito
2. **🌙** = Mudar para tema escuro
3. **☀️** = Mudar para tema claro
4. A preferência é salva automaticamente

## 🎨 Temas Disponíveis

### 🌞 Tema Claro

-   Fundo claro (#f5f5f5)
-   Containers brancos
-   Texto escuro
-   Bordas suaves

### 🌙 Tema Escuro

-   Fundo escuro (#1a1a1a)
-   Containers escuros (#2d2d2d)
-   Texto claro (#e0e0e0)
-   Bordas escuras

## 📱 Responsividade

### 💻 Desktop

-   Layout em grid flexível
-   Tabela com colunas organizadas
-   Botões com tamanho padrão

### 📱 Mobile

-   Layout em coluna única
-   Tabela transformada em cards
-   Botões otimizados para toque
-   Campo de pesquisa em tela cheia

## 🔧 Funcionalidades Técnicas

### 💾 Armazenamento

-   **localStorage**: Dados persistem entre sessões
-   **sessionStorage**: Dados temporários para edição
-   **JSON**: Formato de armazenamento estruturado

### 🔍 Pesquisa

-   **Busca em tempo real**: Filtragem instantânea
-   **Normalização de texto**: Remove acentos e caracteres especiais
-   **Case-insensitive**: Não diferencia maiúsculas/minúsculas

### ✅ Validação

-   **Campos obrigatórios**: Verificação em tempo real
-   **Formatação automática**: Valores monetários formatados
-   **Feedback visual**: Estados de erro e sucesso

## 🎭 Ícones e Símbolos

| Elemento    | Ícone | Descrição          |
| ----------- | ----- | ------------------ |
| Editar      | ✏️    | Modificar registro |
| Excluir     | 🗑️    | Remover registro   |
| Pesquisar   | 🔍    | Buscar celulares   |
| Cadastrar   | ➕    | Adicionar novo     |
| Salvar      | 💾    | Gravar dados       |
| Voltar      | ⬅️    | Página anterior    |
| Listagem    | 📋    | Ver todos          |
| Tema Escuro | 🌙    | Modo escuro        |
| Tema Claro  | ☀️    | Modo claro         |

## 🌐 Compatibilidade

### 🌍 Navegadores Suportados

-   ✅ Chrome 80+
-   ✅ Firefox 75+
-   ✅ Safari 13+
-   ✅ Edge 80+

### 📱 Dispositivos

-   ✅ Desktop (1024px+)
-   ✅ Tablet (768px - 1023px)
-   ✅ Mobile (320px - 767px)

## 🚀 Como Executar

### 1. **Download do Projeto**

```bash
# Clone ou baixe os arquivos do projeto
# Certifique-se de ter todos os arquivos na mesma pasta
```

### 2. **Abrir no Navegador**

```bash
# Opção 1: Duplo clique em qualquer arquivo .html
# Opção 2: Arraste o arquivo para o navegador
# Opção 3: Use um servidor local (Live Server, etc.)
```

### 3. **Navegação**

-   **Página Inicial**: `index.html` (Cadastro)
-   **Listagem**: `listagem.html` (Visualização)

### 📱 Breakpoints Responsivos

```css
/* Mobile */
@media (max-width: 768px) /* Tablet */ @media (max-width: 1024px) /* Desktop */ @media (min-width: 1025px);
```

## 🔄 Fluxo de Dados

```
1. Cadastro → Validação → localStorage → Redirecionamento
2. Listagem → Leitura localStorage → Renderização
3. Edição → sessionStorage → Preenchimento → Atualização
4. Exclusão → Confirmação → Remoção → Atualização
5. Pesquisa → Filtragem → Exibição em tempo real
```

## 📊 Estrutura de Dados

```javascript
// Estrutura do celular no localStorage
{
  marca: "Samsung",           // string
  modelo: "Galaxy S23 Ultra", // string
  cor: "Preto",              // string
  valor: "R$ 5.499,00",      // string formatada
  estado: "Novo",            // "Novo" | "Usado"
  informacoes: "512GB..."    // string (opcional)
}
```

## 🔒 Segurança e Limitações

### ✅ Características

-   **Dados locais**: Informações ficam apenas no navegador
-   **Sem servidor**: Não há risco de vazamento online
-   **Validação frontend**: Verificações no cliente

### ⚠️ Limitações

-   **Apenas local**: Dados não sincronizam entre dispositivos
-   **Limpeza do navegador**: Dados podem ser perdidos
-   **Sem backup**: Não há recuperação automática

## 🆕 Versões e Atualizações

### v1.0 - Versão Atual

-   ✅ Sistema completo de CRUD
-   ✅ Interface moderna com ícones
-   ✅ Tema escuro/claro
-   ✅ Responsividade total
-   ✅ Pesquisa avançada

## 🎯 Conceitos de CSS Flexbox Aplicados

### 📐 Layout Flexível

-   **`display: flex`**: Contêineres flexíveis para body, containers e tabelas
-   **`flex-direction`**: Controle do fluxo (column/row) para diferentes layouts
-   **`flex-wrap`**: Quebra de linha automática em elementos responsivos

### 🎯 Alinhamento

-   **`justify-content`**: Alinhamento horizontal dos elementos
-   **`align-items`**: Alinhamento vertical dos elementos
-   **`gap`**: Espaçamento uniforme entre elementos flex

### 📏 Distribuição de Espaço

-   **`flex`**: Crescimento, encolhimento e tamanho base dos elementos
-   **Propriedades flex personalizadas**: Para colunas da tabela com tamanhos específicos

## 👨‍💻 Desenvolvedor

**Sistema desenvolvido com foco em:**

-   🎯 Usabilidade
-   🎨 Design moderno
-   📱 Responsividade
-   ⚡ Performance
-   🧹 Código limpo

---

### 📝 Licença

Este projeto é de uso livre para fins educacionais e pessoais.

### 🤝 Contribuições

Sugestões e melhorias são sempre bem-vindas!

**Última atualização:** 2 de julho de 2025
