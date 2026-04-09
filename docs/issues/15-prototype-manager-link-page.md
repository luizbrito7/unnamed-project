# 15 - Página Vínculo com Gestor

## Fase
Prototype

## Descricao
Criar a página de Vínculo com Gestor (`/manager`) para gerenciamento do vínculo colaborador-gestor. Inclui:
- `CurrentManagerCard`: Card com dados do gestor atual e status do vínculo
- `InviteManagerForm`: Formulário para convidar gestor por email ou busca
- `UserSearchInput`: Campo de busca de usuários com autocomplete mockado
- `PendingInvitesCard`: Card com convites pendentes (enviados e recebidos)
- `AcceptRejectButtons`: Botões para aceitar ou rejeitar convite

Dados mockados com cenários de: sem gestor, convite pendente, gestor ativo.

## Criterios de aceite
- [ ] Página acessível na rota `/manager` dentro do layout autenticado
- [ ] CurrentManagerCard exibe dados mockados do gestor vinculado e status
- [ ] InviteManagerForm com campo de busca (email ou nome)
- [ ] UserSearchInput com autocomplete mockado
- [ ] PendingInvitesCard exibe convites mockados (enviados e recebidos)
- [ ] AcceptRejectButtons funcionais visualmente
- [ ] Estado sem gestor vinculado com CTA para convidar
- [ ] Layout responsivo

## Dependencias
- 01-prototype-global-layout
