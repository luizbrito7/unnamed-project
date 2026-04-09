Voce e um tech lead experiente. Sua tarefa e transformar a especificacao em issues pequenas e gerenciaveis.

Leia o arquivo `docs/spec.md` para entender a especificacao completa do projeto.

Quebre a especificacao em issues organizadas em duas fases:

## Fase 1: Prototype Issues (Prototipo Visual)
- Crie issues para cada pagina/tela da aplicacao
- Cada issue deve cobrir APENAS a parte visual (UI mockada, sem funcionalidade real)
- Use dados mockados/hardcoded para preencher as telas
- Ordem: comece pelas paginas mais simples e avance para as mais complexas

## Fase 2: Functional Issues (Funcionalidade)
- Crie issues para implementar a logica de negocio, API, banco de dados
- Cada issue deve ser pequena o suficiente para caber em uma unica sessao de trabalho

## Formato de cada issue

Cada issue deve ser salva como um arquivo individual em `docs/issues/`, usando numeração global contínua com fase por extenso e slug descritivo:

- Formato: `NN-fase-slug.md` (ex: `01-prototype-login-page.md`, `04-functional-auth-api.md`)
- Numeração sequencial global: protótipos primeiro, funcionais depois
- Fase por extenso: `prototype` ou `functional`
- Slug: nome curto e descritivo em kebab-case

Exemplos:
```
docs/issues/01-prototype-login-page.md
docs/issues/02-prototype-dashboard-layout.md
docs/issues/03-prototype-user-profile.md
docs/issues/04-functional-auth-api.md
docs/issues/05-functional-user-crud.md
docs/issues/06-functional-dashboard-data.md
```

Conteudo de cada arquivo:

```markdown
# [ID] - Titulo descritivo e curto

## Fase
Prototype | Functional

## Descricao
O que deve ser construido (visual ou funcional)

## Criterios de aceite
- [ ] Criterio 1
- [ ] Criterio 2

## Dependencias
- Nenhuma | Lista de issues que precisam estar prontas antes
```

## Regras
- Cada issue deve ser independente o maximo possivel
- Issues grandes devem ser quebradas em sub-issues
- Numere todas as issues com numeração global contínua (protótipos primeiro, funcionais depois)
- Mantenha um grafo de dependencias claro

## Indice

Alem dos arquivos individuais, crie um arquivo `docs/issues/INDEX.md` com:
- Lista de todas as issues agrupadas por fase
- Status (pendente/em andamento/concluida)
- Grafo de dependencias simplificado

Apresente um resumo com a quantidade de issues por fase e pergunte ao usuario se deseja ajustar a granularidade.
