export interface NavItem {
  name: string
  href: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: "Foundation",
    items: [
      { name: "Design Tokens", href: "/styleguide" },
    ]
  },
  {
    title: "Components",
    items: [
      { name: "AppSidebar", href: "/styleguide/components/app-sidebar" },
      { name: "AppHeader", href: "/styleguide/components/app-header" },
      { name: "RoleSwitcher", href: "/styleguide/components/role-switcher" },
      { name: "ThemeToggle", href: "/styleguide/components/theme-toggle" },
      { name: "BreadcrumbNav", href: "/styleguide/components/breadcrumb-nav" },
      { name: "LoginForm", href: "/styleguide/components/login-form" },
    ]
  }
]
