# 🧠 Quiz-App

Aplicação de quiz interativo sobre programação, desenvolvida em **React + Vite**. O usuário escolhe uma categoria (HTML, CSS ou JavaScript) e responde perguntas de múltipla escolha, podendo usar recursos de ajuda como "Dica" e "Excluir uma alternativa", com pontuação final ao término do jogo.

## 📋 Sobre o projeto

O Quiz-App simula o fluxo de um quiz gamificado, com quatro etapas principais controladas por uma máquina de estados simples:

1. **Start** — Tela de boas-vindas.
2. **Category** — Seleção da categoria de perguntas (HTML, CSS ou JavaScript).
3. **Playing** — Exibição das perguntas, alternativas e recursos de ajuda.
4. **End** — Tela de resultado final com a pontuação obtida.

Todo o estado global da aplicação (pergunta atual, pontuação, categoria escolhida, ajudas utilizadas, etc.) é gerenciado através da **Context API** do React combinada com **useReducer**, centralizando a lógica de negócio fora dos componentes visuais.

## ✨ Funcionalidades

- Seleção de categoria de perguntas (HTML, CSS, JavaScript)
- Embaralhamento aleatório das perguntas a cada partida
- Sistema de pontuação em tempo real
- Recurso de **Dica** para perguntas que possuem uma dica cadastrada
- Recurso de **Excluir uma alternativa** incorreta para facilitar a escolha
- Feedback visual (certo/errado) ao selecionar uma resposta
- Tela final com pontuação total e opção de **reiniciar o jogo**

## 🚀 Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- Context API + useReducer (gerenciamento de estado global)
- CSS puro (um arquivo de estilos por componente)
- ESLint (padronização e qualidade de código)

## 📁 Estrutura do projeto

```
quiz/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Welcome.jsx        # Tela inicial
│   │   ├── PickCategory.jsx   # Seleção de categoria
│   │   ├── Questions.jsx      # Exibição das perguntas
│   │   ├── Options.jsx        # Alternativas de resposta
│   │   └── GameOver.jsx       # Tela de resultado final
│   ├── context/
│   │   └── quiz.jsx           # Context + Reducer (estado global do quiz)
│   ├── data/
│   │   └── questions_complete.js  # Banco de perguntas por categoria
│   ├── img/                   # Ilustrações usadas nas telas
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## ⚙️ Como executar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/PedroHenriqueSantosGonc/<nome-do-repositorio>.git

# Acesse a pasta do projeto
cd quiz

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (porta padrão do Vite).

### Outros scripts disponíveis

| Comando           | Descrição                                  |
|--------------------|---------------------------------------------|
| `npm run dev`      | Inicia o servidor de desenvolvimento         |
| `npm run build`    | Gera a versão de produção do projeto         |
| `npm run preview`  | Pré-visualiza a build de produção            |
| `npm run lint`     | Executa a checagem de lint no código         |

## 🎯 Como jogar

1. Clique em **"Iniciar"** na tela de boas-vindas.
2. Escolha uma categoria de perguntas.
3. Responda cada pergunta clicando em uma das alternativas.
4. Use **"Dica"** ou **"Excluir uma"** caso precise de ajuda (quando disponíveis).
5. Ao final, veja sua pontuação e clique em **"Reiniciar"** para jogar novamente.

## 🔧 Possíveis melhorias futuras

- Adicionar novas categorias e perguntas ao banco de dados
- Implementar temporizador por pergunta
- Salvar histórico de pontuações (localStorage ou backend)
- Adicionar responsividade completa para dispositivos móveis
- Testes automatizados dos componentes

## 👤 Autor

Desenvolvido por **Pedro Henrique**
🔗 [GitHub](https://github.com/PedroHenriqueSantosGonc)

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo, estudá-lo e modificá-lo.
