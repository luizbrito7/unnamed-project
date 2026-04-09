# 23 - Profile API + Frontend Integration

## Fase
Functional

## Descricao
Implementar CRUD do perfil do usuário e upload de avatar:
- **API**: GET /profile (dados do usuário logado), PATCH /profile (atualizar nome, cargo, departamento), POST /profile/avatar (upload de imagem para Supabase Storage). Validação: aceita apenas jpg/png/webp, máximo 2MB.
- **Frontend**: Integrar página de Perfil (P06) com API real. Editar campos e salvar. Upload de avatar com preview. Exibir dados do gestor vinculado.

## Criterios de aceite
- [ ] GET /profile retorna dados do perfil do usuário autenticado
- [ ] PATCH /profile atualiza nome, cargo e departamento
- [ ] POST /profile/avatar faz upload para Supabase Storage e atualiza avatar_url
- [ ] Validação de avatar: apenas imagens (jpg, png, webp), máximo 2MB
- [ ] Frontend: ProfileForm salva alterações via API com toast de sucesso/erro
- [ ] Frontend: AvatarUpload envia imagem e atualiza preview
- [ ] Frontend: ManagerInfo exibe dados reais do gestor vinculado
- [ ] Loading states durante salvamento

## Dependencias
- 06-prototype-profile-page
- 22-functional-auth-integration
