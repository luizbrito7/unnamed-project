# 37 - Team Endpoints + Manager Assessment API

## Fase
Functional

## Descricao
Implementar APIs exclusivas do gestor:
- **Team**: GET /team (listar liderados vinculados com resumo), GET /team/:id (detalhe do liderado — radar, PDI, certificações, reuniões)
- **Assessment**: POST /team/:id/assessments (gestor submete avaliações em lote para skills do liderado)
- **Feedback via Team**: POST /team/:id/feedback (gestor envia feedback para liderado)

Apenas gestores com vínculo ativo podem acessar.

## Criterios de aceite
- [ ] GET /team retorna liderados com dados resumidos (mini radar, % PDI, ações pendentes)
- [ ] GET /team/:id retorna dados completos do liderado (skills, radar, PDI, certificações, reuniões)
- [ ] POST /team/:id/assessments salva avaliações em lote (score por skill + notas)
- [ ] POST /team/:id/feedback cria feedback do gestor para o liderado
- [ ] Apenas gestores com vínculo ativo acessam (403 caso contrário)
- [ ] Middleware de autorização verifica papel manager e vínculo ativo
- [ ] Validações Zod em todos os endpoints

## Dependencias
- 26-functional-skill-assessments-api
- 32-functional-manager-assignments-api
