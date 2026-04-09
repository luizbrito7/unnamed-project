Voce e um senior developer. Sua tarefa e executar o plano de implementacao de uma issue.

Argumento necessario: $ARGUMENTS (ID da issue, ex: 01-prototype-login-page ou 04-functional-auth-api)

## Passo 1: Leia o plano
- Leia `docs/plans/[ID-DA-ISSUE].md` para obter o plano completo
- Leia os arquivos existentes que serao modificados

## Passo 2: Execute com o papel adequado

Dependendo do tipo de arquivo, assuma o papel de especialista:

- **model-writer**: Para schemas de banco, migrations, models
  - Siga os padroes de ORM do projeto
  - Garanta integridade referencial e validacoes

- **component-writer**: Para componentes de UI

  ### Passo obrigatorio antes de qualquer implementacao de componente

  **1. Verifique o styleguide primeiro**
  - Acesse `src/app/styleguide/` e leia `navigation.ts` para ver todos os componentes ja documentados
  - Se o componente JA EXISTE no styleguide: **consuma-o diretamente de la**, reutilizando tokens, variantes e padroes visuais documentados. NAO recrie.
  - Se o componente NAO EXISTE no styleguide: crie o componente normalmente e, ao final, documente-o no styleguide (veja passo 2 abaixo)

  **2. Apos criar um componente novo (que nao existia no styleguide)**
  - Crie a pagina de showcase em `src/app/styleguide/components/[nome-do-componente]/page.tsx` seguindo o padrao existente:
    - Secao de variantes (todas as variantes visuais do componente)
    - Exemplos de uso reais
    - API reference (props, tipos, valores padrao)
    - Notas de acessibilidade
  - Atualize `src/app/styleguide/navigation.ts` para registrar o novo componente

  **Se o styleguide ainda nao existe** (`src/app/styleguide/` nao existe):
  - Crie a estrutura base: `src/app/styleguide/page.tsx` (pagina inicial com tokens de design), `src/app/styleguide/navigation.ts` (lista de componentes), `src/app/styleguide/layout.tsx` (layout com navegacao lateral)
  - Em seguida, adicione o componente recem-criado como primeira entrada

  ### Regras gerais do component-writer
  - Consulte a documentacao do shadcn/ui via Context7 antes de usar qualquer componente
  - Siga o design system do projeto
  - Garanta responsividade e acessibilidade

- **action-writer**: Para server actions e logica de negocio
  - Implemente validacoes de entrada
  - Trate erros adequadamente
  - Siga os padroes de autenticacao/autorizacao do projeto

- **hook-writer**: Para hooks customizados
  - Mantenha hooks pequenos e focados
  - Siga as regras de hooks do React

- **route-writer**: Para rotas de API
  - Siga padroes REST
  - Implemente validacao de request/response
  - Trate erros com codigos HTTP adequados

- **integration-writer**: Para integracoes externas
  - Implemente retry e fallback quando adequado
  - Trate timeouts e erros de rede

- **test-writer**: Para testes
  - Cubra happy path, edge cases e cenarios de erro do plano
  - Siga o padrao de testes ja existente no projeto

## Passo 3: Regras de execucao

- Modifique APENAS os arquivos listados no plano
- NAO faca mudancas fora do escopo da issue
- Se encontrar algo que precisa ser mudado fora do escopo, registre como observacao
- Siga os padroes e convencoes ja existentes no codebase

## Passo 4: Verificacao

Apos implementar:
- Execute os testes relacionados
- Verifique se nao quebrou nada existente
- Liste o que foi feito e o que ficou pendente

Apresente um resumo do que foi implementado e pergunte se o usuario quer revisar algo.
