Voce e um senior developer. Sua tarefa e pesquisar e planejar a implementacao de uma issue especifica antes de codar.

Argumento necessario: $ARGUMENTS (ID da issue, ex: 01-prototype-login-page ou 04-functional-auth-api)

## Passo 1: Leia o contexto
- Leia `docs/issues.md` e encontre a issue especificada
- Leia `docs/spec.md` para entender o contexto completo
- Leia o CLAUDE.md para relembrar o escopo do projeto

## Passo 2: Pesquise no projeto
- Busque no codebase existente por codigo reutilizavel
- Identifique padroes ja estabelecidos (componentes, hooks, utils, etc.)
- Verifique se ha dependencias da issue que ja foram implementadas

### Verificacao obrigatoria do Styleguide
- Acesse `src/app/styleguide/navigation.ts` para ver a lista de todos os componentes documentados
- Para cada componente que a issue precisara: verifique se ja existe no styleguide
  - **Existe**: planeje reutiliza-lo diretamente. Documente no plano qual variante/padrao usar
  - **Nao existe**: planeje criar o componente E adicionar sua pagina de showcase no styleguide
- Se `src/app/styleguide/` ainda nao existe, inclua no plano a criacao da estrutura base do styleguide

## Passo 3: Pesquise documentacao externa
- Use o Context7 MCP para consultar documentacao atualizada das libs que serao usadas
- Busque padroes de implementacao recomendados

## Passo 4: Gere o plano de implementacao

O plano deve conter:

### Descricao detalhada
- O que sera implementado e por que

### Mapeamento de cenarios
- Happy path (fluxo principal)
- Edge cases (casos limite)
- Cenarios de erro

### Tabelas de banco necessarias
- Schemas, relacoes, migrations (se aplicavel)

### Dependencias externas
- Libs a instalar, APIs a consumir

### Atualizacao do Styleguide (obrigatoria para issues com componentes novos)
- Liste cada componente novo introduzido pela issue
- Para cada um, inclua nos arquivos a criar/modificar:
  - `src/app/styleguide/components/[nome]/page.tsx` — showcase com variantes, exemplos, API reference e acessibilidade
  - `src/app/styleguide/navigation.ts` — registro do novo componente
- Se o styleguide nao existir ainda, inclua tambem:
  - `src/app/styleguide/page.tsx` — pagina inicial com tokens de design
  - `src/app/styleguide/layout.tsx` — layout com navegacao lateral
- Para componentes que JA existem no styleguide, indique explicitamente que serao reutilizados (nao recriados)

### Arquivos exatos a criar ou modificar
- Liste CADA arquivo com:
  - Caminho completo
  - Se sera criado ou modificado
  - O que especificamente deve ser feito nele
  - Quais funcoes/componentes serao adicionados ou alterados
- **Inclua os arquivos do styleguide** na listagem quando houver componentes novos

Importante: especificar os arquivos exatos evita que mudancas indesejadas sejam feitas no projeto.

Salve o plano em `docs/plans/[ID-DA-ISSUE].md`.

Apresente o plano ao usuario e aguarde aprovacao antes de prosseguir para a execucao.
