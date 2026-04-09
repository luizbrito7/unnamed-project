# 26 - Skill Assessments API

## Fase
Functional

## Descricao
Implementar API para avaliações de skills (auto e gestor):
- POST /skills/:id/assessments — criar avaliação (autoavaliação do colaborador ou avaliação do gestor)
- GET /skills/:id/assessments — listar histórico de avaliações de uma skill
- POST /team/:id/assessments — gestor submete avaliações em lote para todas as skills de um liderado

Cada avaliação registra: score (1-5), notes (opcional), assessed_by (user_id), data.

## Criterios de aceite
- [ ] POST /skills/:id/assessments cria registro de avaliação com score 1-5
- [ ] GET /skills/:id/assessments retorna histórico cronológico de avaliações
- [ ] POST /team/:id/assessments permite gestor submeter avaliações em lote
- [ ] Validação: score deve ser 1-5, assessed_by deve ser o usuário logado ou gestor vinculado
- [ ] Gestores só podem avaliar liderados vinculados (status active)
- [ ] Notas opcionais por avaliação
- [ ] Retorna erro 403 se tentar avaliar sem permissão

## Dependencias
- 24-functional-skills-api
