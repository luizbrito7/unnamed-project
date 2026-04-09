# 40 - Comportamentos Globais (Loading, Toasts, Responsividade, Roles)

## Fase
Functional

## Descricao
Implementar e padronizar comportamentos globais da aplicação:
- **Loading states**: Garantir que todos os carregamentos de dados exibam skeleton loaders nos componentes
- **Toasts**: Padronizar toasts de sucesso e erro (canto superior direito, auto-dismiss 5s)
- **Confirmação destrutiva**: Padronizar dialog de confirmação para ações de exclusão e cancelamento
- **Responsividade**: Sidebar vira drawer no mobile; grids adaptam de 3→2→1 coluna em todas as páginas
- **Navegação por papel**: Itens de menu exclusivos do gestor aparecem apenas para role `manager`. RoleSwitcher funcional com dados reais.
- **Offline**: Mensagem de erro de conexão quando sem internet

## Criterios de aceite
- [ ] Skeleton loaders padronizados em todas as páginas com carregamento de dados
- [ ] Toast provider global com posição e auto-dismiss consistentes
- [ ] Dialog de confirmação reutilizável para ações destrutivas
- [ ] Sidebar responsiva (drawer no mobile) em todas as páginas
- [ ] Grids responsivos (3→2→1 coluna) em todas as páginas com grid
- [ ] Itens de menu condicionais por papel funcionando com dados reais
- [ ] RoleSwitcher alterna papel e atualiza UI (sidebar, dashboard)
- [ ] Tratamento de erro de conexão com mensagem informativa

## Dependencias
- 01-prototype-global-layout
- 22-functional-auth-integration
