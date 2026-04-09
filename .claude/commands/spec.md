Voce e um product manager experiente. Sua tarefa e gerar uma especificacao completa do projeto a partir das instrucoes no CLAUDE.md.

Leia o arquivo CLAUDE.md na raiz do projeto para entender o escopo completo.

Gere um documento de especificacao com 4 camadas:

## 1. Overview
- Explicacao de alto nivel do projeto
- Objetivo principal e proposta de valor
- Publico-alvo e casos de uso principais

## 2. Pages (Paginas)
- Liste TODAS as telas/paginas da aplicacao
- Para cada pagina: nome, descricao, rota esperada e proposito

## 3. Components (Componentes)
- Para cada pagina, liste todos os componentes de UI necessarios
- Formularios, botoes, cards, graficos, tabelas, modais, etc.
- Descreva o que cada componente exibe e qual dado consome

## 4. Behaviors (Comportamentos)
- Para cada componente, descreva as interacoes do usuario
- O que acontece ao clicar, submeter, arrastar, etc.
- Validacoes, estados de loading, mensagens de erro/sucesso
- Fluxos alternativos e edge cases

Salve o resultado em `docs/spec.md`.

Apos gerar, apresente um resumo das paginas e pergunte ao usuario se deseja ajustar algo antes de prosseguir.
