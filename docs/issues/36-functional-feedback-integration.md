# 36 - Feedback API + Frontend Integration

## Fase
Functional

## Descricao
Implementar API de feedback e integrar com a página de Feedback (P14):
- **API**: POST /feedback (criar feedback — tipo, conteúdo, skill opcional, target_user), GET /feedback/received (recebidos), GET /feedback/sent (enviados), filtráveis por tipo e skill
- **Frontend**: Carregar feedbacks da API, tabs alternando entre recebidos/enviados, filtros por tipo e skill, feedbacks imutáveis após envio

Feedback é criado principalmente pela página do gestor (P17 — GiveFeedbackDialog), mas a visualização acontece nesta página.

## Criterios de aceite
- [ ] POST /feedback cria feedback com tipo, conteúdo, skill opcional e target_user
- [ ] GET /feedback/received retorna feedbacks recebidos filtráveis
- [ ] GET /feedback/sent retorna feedbacks enviados filtráveis
- [ ] Feedback imutável após criação (sem PUT/PATCH/DELETE)
- [ ] Frontend: feedbacks carregados da API ao montar
- [ ] Tabs alternando entre recebidos e enviados
- [ ] FeedbackFilters filtram por tipo e skill
- [ ] Estado vazio diferente para recebidos e enviados
- [ ] Skeleton loaders e toasts

## Dependencias
- 14-prototype-feedback-page
- 21-functional-api-boilerplate
