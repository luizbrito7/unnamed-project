# 35 - Meetings Frontend Integration

## Fase
Functional

## Descricao
Integrar as páginas de Reuniões (P12) e Detalhe da Reunião (P13) com a API real:
- Listar reuniões via API com filtro por data
- NewMeetingDialog cria reunião via API e redireciona para detalhe
- MeetingAgenda e MeetingNotes salvam via API (debounce 1s ou botão salvar)
- AddActionItemForm cria ação via API
- Checkbox de conclusão atualiza status da ação via API
- Deletar ação via API com confirmação
- Validação: necessário gestor vinculado para criar reunião

## Criterios de aceite
- [ ] Lista de reuniões carregada da API
- [ ] MeetingsDateFilter filtra por intervalo de datas
- [ ] NewMeetingDialog cria reunião via API e redireciona para detalhe
- [ ] MeetingAgenda e MeetingNotes salvam automaticamente (debounce) ou via botão
- [ ] AddActionItemForm cria ação via API (descrição, responsável, prazo, meta vinculada)
- [ ] Checkbox alterna status da ação (pending↔done) via API
- [ ] Deletar ação via API com confirmação
- [ ] Mensagem de erro quando sem gestor vinculado ao tentar criar reunião
- [ ] Skeleton loaders e toasts

## Dependencias
- 12-prototype-meetings-list-page
- 13-prototype-meeting-detail-page
- 34-functional-meetings-api
