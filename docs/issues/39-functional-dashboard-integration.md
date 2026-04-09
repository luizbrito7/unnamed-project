# 39 - Dashboard Aggregation API + Frontend Integration

## Fase
Functional

## Descricao
Implementar API de agregação do Dashboard e integrar com a página (P05):
- **API**: GET /dashboard — retorna dados agregados: resumo de skills (contagem, scores), PDI ativo (% conclusão), certificações em andamento, próxima reunião, feedbacks recentes, dados do time (para gestores)
- **Frontend**: Integrar todos os cards do Dashboard com dados reais. Skeleton loaders durante carregamento. Estados vazios com CTAs quando sem dados. ManagerTeamSummaryCard visível apenas para gestores.

## Criterios de aceite
- [ ] GET /dashboard retorna dados agregados em uma única chamada
- [ ] Dados incluem: skills summary, PDI progress, certificações ativas, próxima reunião, feedbacks recentes
- [ ] Para gestores: inclui dados agregados do time (quantidade de liderados, PDIs ativos, ações pendentes)
- [ ] Frontend: todos os cards do Dashboard usam dados reais da API
- [ ] Cards clicáveis navegam para páginas correspondentes
- [ ] Estados vazios com CTAs quando dados não existem
- [ ] ManagerTeamSummaryCard visível apenas em modo gestor
- [ ] Skeleton loaders durante carregamento
- [ ] Layout responsivo mantido

## Dependencias
- 05-prototype-dashboard-page
- 22-functional-auth-integration
- 24-functional-skills-api
- 28-functional-pdi-goals-api
- 30-functional-certifications-api
- 34-functional-meetings-api
