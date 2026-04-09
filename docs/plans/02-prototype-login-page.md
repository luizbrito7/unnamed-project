# Plano de Implementação — 02 Prototype Login Page

## Descrição

Criar a página de login (`/login`) como página pública (fora do route group `(app)`), sem sidebar/header. Layout centralizado e limpo com formulário de email/senha, botão de login, link para recuperar senha e link para criar conta. Apenas UI estática — sem integração com API/Auth.

## Mapeamento de cenários

### Happy path
- Usuário acessa `/login`, vê formulário centralizado
- Preenche email e senha, clica em "Entrar"
- (Protótipo: nenhuma ação real, apenas visual)

### Edge cases
- Campos vazios: validação HTML nativa (`required`, `type="email"`)
- Tela mobile: layout responsivo, formulário ocupa largura total com padding

### Cenários de erro
- Não aplicável nesta fase (protótipo visual)

## Tabelas de banco necessárias
Nenhuma — protótipo estático.

## Dependências externas
Nenhuma lib nova. Componentes shadcn já disponíveis:
- `Button`, `Input`, `Label`, `Card` (já instalados)

## Componentes do Styleguide

### Reutilizados (já existem)
- `Button` — variante `default` para o botão de login
- `Input` — campos email e senha
- `Label` — labels dos campos
- `Card` — container do formulário

### Novos componentes
- `LoginForm` — formulário completo de login (email + senha + botão)
- `ForgotPasswordLink` — link estilizado para `/forgot-password`
- `RegisterLink` — link estilizado para `/register`

### Atualização do Styleguide
- Criar página showcase `LoginForm` com demonstração do formulário isolado, variantes e API reference
- Registrar na navegação do styleguide

## Arquivos a criar ou modificar

### 1. `frontend/src/app/login/page.tsx` — **CRIAR**
- Página de rota `/login`
- Layout centralizado (flexbox center, min-h-screen)
- Logo/nome do app no topo
- Renderiza `<LoginForm />`
- Abaixo do form: `<RegisterLink />`
- Sem sidebar/header (fora do route group `(app)`)

### 2. `frontend/src/components/login-form.tsx` — **CRIAR**
- Componente `LoginForm` com:
  - Campo email (`<Input type="email" required />`) com `<Label>`
  - Campo senha (`<Input type="password" required />`) com `<Label>`
  - `<ForgotPasswordLink />` alinhado à direita abaixo do campo senha
  - `<Button>` full-width com texto "Entrar"
- Encapsulado em `<Card>` para manter consistência visual
- Formulário usa tag `<form>` com `onSubmit` que faz `e.preventDefault()`

### 3. `frontend/src/components/forgot-password-link.tsx` — **CRIAR**
- Componente `ForgotPasswordLink`
- `<Link href="/forgot-password">` com estilo de texto secundário/muted
- Texto: "Esqueceu a senha?"

### 4. `frontend/src/components/register-link.tsx` — **CRIAR**
- Componente `RegisterLink`
- Texto: "Não tem uma conta?" + `<Link href="/register">` com estilo link
- Texto: "Criar conta"

### 5. `frontend/src/app/styleguide/components/login-form/page.tsx` — **CRIAR**
- Página showcase seguindo padrão existente (ver `theme-toggle/page.tsx`):
  - Demonstração do `LoginForm` renderizado
  - API Reference dos sub-componentes
  - Notas de acessibilidade (labels, tipo email, required)

### 6. `frontend/src/app/styleguide/navigation.ts` — **MODIFICAR**
- Adicionar entrada `{ name: "LoginForm", href: "/styleguide/components/login-form" }` na seção "Components"

## Decisões de design

- **Fora de `(app)/`**: A página de login é pública, não deve carregar sidebar/header/RoleProvider
- **Card container**: O formulário fica dentro de um `Card` para manter consistência visual com o design system
- **Logo no topo**: Usar o ícone SVG do app (`icon.svg`) ou o nome "Unnamed" como branding simples
- **Largura máxima**: `max-w-sm` (384px) para o card do formulário, centralizado na tela
- **Validação**: Apenas validação HTML nativa (`required`, `type="email"`) — validação JS será adicionada na fase funcional
