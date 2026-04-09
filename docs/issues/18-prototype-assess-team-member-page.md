# 18 - Página Avaliar Liderado (Gestor)

## Fase
Prototype

## Descricao
Criar a página de Avaliação de Liderado (`/team/:id/assess`) para o gestor avaliar as skills de um colaborador. Inclui:
- `AssessmentSkillsList`: Lista de skills do liderado agrupadas por categoria
- `AssessmentSlider`: Slider 1-5 para cada skill com campo de notas opcional
- `AssessmentComparisonIndicator`: Indicador mostrando autoavaliação do liderado ao lado da avaliação do gestor
- `SubmitAssessmentButton`: Botão para salvar todas as avaliações

Dados mockados com skills do liderado e autoavaliações para comparação.

## Criterios de aceite
- [ ] Página acessível na rota `/team/:id/assess` dentro do layout autenticado (visão gestor)
- [ ] AssessmentSkillsList exibe skills mockadas agrupadas por categoria (hardskills e softskills)
- [ ] AssessmentSlider funcional visualmente (1-5) para cada skill
- [ ] Campo de notas opcional abaixo de cada skill
- [ ] AssessmentComparisonIndicator mostra autoavaliação do liderado ao lado do slider
- [ ] SubmitAssessmentButton com estilo primário
- [ ] Botão "Cancelar" volta para `/team/:id`
- [ ] Loading mockado no botão de submit
- [ ] Layout responsivo

## Dependencias
- 01-prototype-global-layout
- 17-prototype-team-member-detail-page
