# 25 - Skills Frontend Integration

## Fase
Functional

## Descricao
Integrar a página de Skills (P07) com a API real:
- Carregar skills do usuário via API ao montar a página
- AddSkillDialog salva via API e atualiza lista
- AddCategoryDialog cria categoria via API
- SkillAssessmentSlider salva autoavaliação via API (debounce 500ms)
- AssessmentHistoryDrawer carrega histórico de avaliações da skill via API
- Deletar skill via API com confirmação
- SkillSearchInput filtra localmente (client-side)
- Skeleton loaders durante carregamento
- Estado vazio quando sem skills

## Criterios de aceite
- [ ] Skills carregadas da API ao montar a página
- [ ] AddSkillDialog cria skill via API e atualiza lista sem reload
- [ ] AddCategoryDialog cria categoria via API
- [ ] SkillAssessmentSlider cria registro de avaliação via API (debounce 500ms)
- [ ] AssessmentHistoryDrawer carrega histórico real de avaliações
- [ ] Deletar skill via API com toast de confirmação
- [ ] SkillSearchInput filtra skills localmente
- [ ] Skeleton loaders durante carregamento inicial
- [ ] Toasts de sucesso/erro em todas as operações

## Dependencias
- 07-prototype-skills-page
- 24-functional-skills-api
