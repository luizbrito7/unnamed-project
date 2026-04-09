# 13 - Página Detalhe da Reunião

## Fase
Prototype

## Descricao
Criar a página de detalhe de reunião (`/meetings/:id`) para visualização e edição de uma reunião específica. Inclui:
- `MeetingHeader`: Data, participantes e status geral (ações pendentes)
- `MeetingAgenda`: Seção de pauta (editável)
- `MeetingNotes`: Seção de notas/anotações (rich text editável)
- `ActionItemsList`: Lista de ações definidas na reunião
- `ActionItemRow`: Linha de ação com descrição, responsável, prazo, checkbox, meta vinculada
- `AddActionItemForm`: Formulário inline para adicionar nova ação

Dados mockados com pauta, notas e 3-4 ações em diferentes estados.

## Criterios de aceite
- [ ] Página acessível na rota `/meetings/:id` dentro do layout autenticado
- [ ] MeetingHeader com data, participantes e resumo de ações pendentes
- [ ] MeetingAgenda com campo de texto editável
- [ ] MeetingNotes com campo de texto editável
- [ ] ActionItemsList com ações mockadas
- [ ] ActionItemRow com checkbox, descrição, responsável, prazo e meta vinculada (badge)
- [ ] AddActionItemForm inline para adicionar nova ação (descrição, responsável, prazo, meta)
- [ ] Checkbox de conclusão funcional visualmente
- [ ] Ícone de lixeira para remover ação (com confirmação)
- [ ] Layout responsivo

## Dependencias
- 01-prototype-global-layout
- 12-prototype-meetings-list-page
