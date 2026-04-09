# 07 - Página de Skills

## Fase
Prototype

## Descricao
Criar a página de Skills (`/skills`) para listagem e gerenciamento de habilidades. Inclui:
- `SkillsTabs`: Tabs para alternar entre "Hardskills" e "Softskills"
- `SkillCategoryGroup`: Agrupamento de skills por categoria (ex: Cloud, Backend, Comunicação)
- `SkillCard`: Card individual com nome, descrição, score (1-5 estrelas/barras)
- `SkillAssessmentSlider`: Slider de 1-5 para autoavaliação inline
- `AddSkillDialog`: Modal para cadastrar nova skill
- `AddCategoryDialog`: Modal para criar categoria
- `SkillSearchInput`: Campo de busca/filtro
- `AssessmentHistoryDrawer`: Drawer com histórico de avaliações de uma skill

Dados mockados com pelo menos 2 categorias por tipo e 3-4 skills por categoria.

## Criterios de aceite
- [ ] Página acessível na rota `/skills` dentro do layout autenticado
- [ ] Tabs "Hardskills" e "Softskills" funcionais (alternância local)
- [ ] Skills agrupadas por categoria com headers de grupo
- [ ] SkillCard exibe nome, descrição e score visual (1-5)
- [ ] SkillAssessmentSlider funcional visualmente (altera score no card)
- [ ] AddSkillDialog abre via botão "+" com formulário completo (nome, tipo, categoria, descrição)
- [ ] AddCategoryDialog abre via botão "Nova categoria"
- [ ] SkillSearchInput filtra skills localmente
- [ ] AssessmentHistoryDrawer abre ao clicar no card com histórico mockado
- [ ] Menu de 3 pontos no card com opção "Excluir" (com confirmação)
- [ ] Estado vazio com CTA para adicionar primeira skill
- [ ] Layout responsivo

## Dependencias
- 01-prototype-global-layout
