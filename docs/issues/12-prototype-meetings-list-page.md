# 12 - Página de Reuniões 1:1

## Fase
Prototype

## Descricao
Criar a página de Reuniões 1:1 (`/meetings`) com listagem cronológica de reuniões. Inclui:
- `MeetingsTimeline`: Timeline cronológica de reuniões
- `MeetingCard`: Card resumo com data, participantes e quantidade de ações pendentes
- `NewMeetingDialog`: Modal para registrar nova reunião (data, pauta)
- `MeetingsDateFilter`: Filtro por intervalo de datas

Dados mockados com 3-4 reuniões.

## Criterios de aceite
- [ ] Página acessível na rota `/meetings` dentro do layout autenticado
- [ ] MeetingsTimeline exibe reuniões em ordem cronológica
- [ ] MeetingCard com data, participantes e contagem de ações pendentes
- [ ] NewMeetingDialog abre via botão "Nova Reunião"
- [ ] MeetingsDateFilter permite filtrar por intervalo de datas
- [ ] Cards clicáveis (navegam para `/meetings/:id`)
- [ ] Estado vazio com CTA para registrar primeira reunião
- [ ] Layout responsivo

## Dependencias
- 01-prototype-global-layout
