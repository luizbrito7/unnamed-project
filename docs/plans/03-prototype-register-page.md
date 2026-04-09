# Plano de Implementação — 03 Prototype Register Page

## Descrição

Criar a página de cadastro (`/register`) como página pública (fora do route group `(app)`), sem sidebar/header. Layout centralizado com formulário de nome completo, email, senha, confirmação de senha, cargo (opcional) e departamento (opcional). Botão de cadastro e link para voltar ao login. Apenas UI estática com validação visual — sem integração com API.

## Mapeamento de cenários

### Happy path
- Usuário acessa `/register`, vê formulário centralizado
- Preenche nome, email, senha e confirmação de senha
- Opcionalmente preenche cargo e departamento
- Clica em "Criar conta"
- (Protótipo: nenhuma ação real, apenas visual)

### Edge cases
- Campos vazios: validação HTML nativa (`required`) nos campos obrigatórios
- Email inválido: validação `type="email"`
- Senhas não coincidem: validação visual client-side (mensagem de erro inline)
- Tela mobile: layout responsivo, formulário ocupa largura total com padding

### Cenários de erro
- Não aplicável nesta fase (protótipo visual)

## Tabelas de banco necessárias
Nenhuma — protótipo estático.

## Dependências externas
Nenhuma lib nova. Componentes shadcn já disponíveis:
- `Button`, `Input`, `Label` (já instalados)

## Componentes do Styleguide

### Reutilizados (já existem)
- `Button` — variante `default` para o botão de cadastro
- `Input` — campos de texto
- `Label` — labels dos campos
- `LoginForm` showcase — referência de padrão visual (mesma estrutura de página pública)

### Novos componentes
- `RegisterForm` — formulário completo de cadastro
- `LoginLink` — link estilizado para voltar ao `/login`

### Atualização do Styleguide
- Criar página showcase `RegisterForm` com demonstração do formulário isolado, sub-componentes e API reference
- Registrar na navegação do styleguide

## Arquivos a criar ou modificar

### 1. `frontend/src/app/register/page.tsx` — **CRIAR**
- Página de rota `/register`
- Layout centralizado (flexbox center, min-h-screen), mesmo padrão de `/login`
- Título "Criar sua conta" + subtítulo
- Renderiza `<RegisterForm />`
- Abaixo do form: `<LoginLink />`
- Sem sidebar/header (fora do route group `(app)`)

### 2. `frontend/src/components/register-form.tsx` — **CRIAR**
- Componente `RegisterForm` ("use client") com:
  - Campo nome completo (`<Input type="text" required />`) com `<Label>`
  - Campo email (`<Input type="email" required />`) com `<Label>`
  - Campo senha (`<Input type="password" required />`) com `<Label>` + toggle visibilidade (mesmo padrão do LoginForm)
  - Campo confirmação de senha (`<Input type="password" required />`) com `<Label>` + toggle visibilidade
  - Validação client-side: se senhas não coincidem, exibir mensagem de erro inline (texto vermelho abaixo do campo)
  - Separador visual "Campos opcionais"
  - Campo cargo (`<Input type="text" />`) com `<Label>` — sem `required`
  - Campo departamento (`<Input type="text" />`) com `<Label>` — sem `required`
  - `<Button>` full-width com texto "Criar conta"
- Formulário usa tag `<form>` com `onSubmit` que faz `e.preventDefault()`

### 3. `frontend/src/components/login-link.tsx` — **CRIAR**
- Componente `LoginLink`
- Texto: "Já tem uma conta?" + `<Link href="/login">` com estilo link
- Texto do link: "Entrar"
- Mesmo padrão visual do `RegisterLink` (espelhado)

### 4. `frontend/src/app/styleguide/components/register-form/page.tsx` — **CRIAR**
- Página showcase seguindo padrão existente (ver `login-form/page.tsx`):
  - Demonstração do `RegisterForm` renderizado
  - Sub-componente `LoginLink` isolado
  - API Reference dos componentes
  - Notas de acessibilidade (labels, tipos, required, validação de match de senha)

### 5. `frontend/src/app/styleguide/navigation.ts` — **MODIFICAR**
- Adicionar entrada `{ name: "RegisterForm", href: "/styleguide/components/register-form" }` na seção "Components"

## Decisões de design

- **Fora de `(app)/`**: Página pública, não deve carregar sidebar/header/RoleProvider
- **Mesmo layout do login**: Reutilizar estrutura visual de `/login` (centralizado, `max-w-sm`, min-h-screen)
- **Toggle de visibilidade de senha**: Reutilizar o padrão já implementado no `LoginForm` (Eye/EyeOff do lucide-react)
- **Validação de match de senha**: Estado local com `useState` — comparar os dois campos e exibir mensagem quando não coincidem (onChange ou onBlur)
- **Campos opcionais**: Separados visualmente com um label "Informações adicionais (opcional)" para deixar claro que não são obrigatórios
- **Largura máxima**: `max-w-sm` (384px) para manter consistência com a página de login
