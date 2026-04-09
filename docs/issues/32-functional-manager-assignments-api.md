# 32 - Manager Assignments API

## Fase
Functional

## Descricao
Implementar API para gerenciamento de vínculos colaborador↔gestor:
- POST /manager/invite — colaborador convida gestor (por email ou user_id). Cria assignment com status `pending`.
- PATCH /manager/:id/accept — gestor aceita convite (status → `active`)
- PATCH /manager/:id/reject — gestor rejeita convite (status → `inactive`)
- DELETE /manager — colaborador desvincula gestor (status → `inactive`)
- GET /manager — retorna dados do vínculo atual e convites pendentes
- GET /users/search?q= — busca de usuários para autocomplete

Regras: apenas 1 gestor ativo por vez; novo convite desativa anterior automaticamente.

## Criterios de aceite
- [ ] POST /manager/invite cria vínculo com status `pending`
- [ ] PATCH /manager/:id/accept muda status para `active`
- [ ] PATCH /manager/:id/reject muda status para `inactive`
- [ ] DELETE /manager desvincula gestor (status → `inactive`)
- [ ] GET /manager retorna vínculo atual e convites pendentes
- [ ] GET /users/search retorna usuários filtrados por nome ou email
- [ ] Regra: apenas 1 gestor ativo — novo convite desativa anterior
- [ ] Validações: não pode convidar a si mesmo, email deve existir na plataforma

## Dependencias
- 21-functional-api-boilerplate
