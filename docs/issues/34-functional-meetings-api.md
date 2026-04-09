# 34 - Meetings & Action Items API

## Fase
Functional

## Descricao
Implementar API para gerenciamento de reuniões 1:1 e ações:
- **Meetings**: POST /meetings (criar reunião), GET /meetings (listar por data), GET /meetings/:id (detalhe), PATCH /meetings/:id (atualizar agenda, notes)
- **Action Items**: POST /meetings/:id/actions (criar ação), PATCH /meetings/:id/actions/:actionId (atualizar status, editar), DELETE /meetings/:id/actions/:actionId (remover)
- Pré-requisito: gestor vinculado (status active) para criar reunião
- Ambos participantes (colaborador e gestor) podem editar

## Criterios de aceite
- [ ] POST /meetings cria reunião com data e pauta (requer gestor vinculado)
- [ ] GET /meetings lista reuniões ordenadas cronologicamente, filtráveis por data
- [ ] GET /meetings/:id retorna detalhe com agenda, notes e ações
- [ ] PATCH /meetings/:id atualiza agenda e notes
- [ ] POST /meetings/:id/actions cria ação (descrição, responsável, prazo, meta vinculada)
- [ ] PATCH /meetings/:id/actions/:actionId atualiza status (pending↔done) e campos
- [ ] DELETE /meetings/:id/actions/:actionId remove ação
- [ ] Apenas colaborador e gestor do par podem acessar/editar
- [ ] Validações Zod em todos os endpoints

## Dependencias
- 21-functional-api-boilerplate
- 32-functional-manager-assignments-api
