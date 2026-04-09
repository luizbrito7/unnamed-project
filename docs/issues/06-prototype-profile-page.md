# 06 - Página de Perfil

## Fase
Prototype

## Descricao
Criar a página de Perfil (`/profile`) para edição de dados pessoais. Inclui:
- `ProfileForm`: Formulário de edição com nome, cargo e departamento
- `AvatarUpload`: Área de upload e preview de foto de perfil
- `ManagerInfo`: Card mostrando gestor vinculado e status do vínculo

Todos os dados mockados. Formulário funciona visualmente mas não persiste.

## Criterios de aceite
- [ ] Página acessível na rota `/profile` dentro do layout autenticado
- [ ] ProfileForm com campos editáveis: nome, cargo, departamento
- [ ] Botão "Salvar" com estilo primário
- [ ] AvatarUpload com preview de imagem mockada e botão para trocar
- [ ] ManagerInfo card com dados mockados do gestor vinculado
- [ ] Layout responsivo
- [ ] Indicação visual de campos obrigatórios

## Dependencias
- 01-prototype-global-layout
