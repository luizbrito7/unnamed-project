# 22 - Autenticação (Supabase Auth + JWT + Frontend)

## Fase
Functional

## Descricao
Implementar o fluxo completo de autenticação usando Supabase Auth:
- **API**: Endpoints de login, register, forgot-password, reset-password usando Supabase Auth SDK. Criação de profile no banco após registro.
- **Frontend**: Integração das páginas de login (P01), cadastro (P02), forgot-password (P03) e reset-password (P04) com a API real. Provider de autenticação com contexto React. Route guards para páginas autenticadas. Redirecionamento para `/login` em sessão expirada. Loading states e tratamento de erros com toasts.

## Criterios de aceite
- [ ] POST /auth/login autentica via Supabase e retorna token JWT
- [ ] POST /auth/register cria usuário no Supabase + profile no banco
- [ ] POST /auth/forgot-password envia email de recuperação via Supabase
- [ ] POST /auth/reset-password redefine senha via Supabase
- [ ] AuthProvider no frontend gerencia estado de autenticação
- [ ] Login funcional: email + senha → redireciona para /dashboard
- [ ] Cadastro funcional: cria conta → redireciona para /login
- [ ] Recuperação de senha funcional: envia email
- [ ] Redefinição de senha funcional: altera senha
- [ ] Route guard redireciona para /login se não autenticado
- [ ] Sessão expirada redireciona com mensagem informativa
- [ ] Loading states e toasts de erro/sucesso em todos os formulários

## Dependencias
- 02-prototype-login-page
- 03-prototype-register-page
- 04-prototype-password-recovery-pages
- 21-functional-api-boilerplate
