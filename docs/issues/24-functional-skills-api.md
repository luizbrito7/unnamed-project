# 24 - Skills & Categorias CRUD API

## Fase
Functional

## Descricao
Implementar API para gerenciamento de skills e categorias:
- **Categorias**: GET /skill-categories (listar por tipo), POST /skill-categories (criar nova)
- **Skills**: GET /skills (listar do usuário, com filtros por tipo/categoria), POST /skills (criar skill e vincular ao usuário), DELETE /skills/:id (remover skill e avaliações)
- **User Skills**: Vincular/desvincular skills ao perfil do usuário

Cada skill pertence a uma categoria que tem um tipo (hardskill/softskill).

## Criterios de aceite
- [ ] GET /skill-categories retorna categorias agrupadas por tipo
- [ ] POST /skill-categories cria nova categoria com validação Zod
- [ ] GET /skills retorna skills do usuário com scores, filtráveis por tipo e categoria
- [ ] POST /skills cria skill e vincula ao usuário
- [ ] DELETE /skills/:id remove skill e avaliações associadas
- [ ] Validações: nome obrigatório, tipo válido, categoria existente
- [ ] Apenas o dono pode gerenciar suas skills

## Dependencias
- 21-functional-api-boilerplate
