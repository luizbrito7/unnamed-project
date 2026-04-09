import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function ThemeTogglePage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold">ThemeToggle</h1>
        <p className="text-muted-foreground mt-1">
          Dropdown para alternar entre temas claro, escuro e sistema.
        </p>
      </div>

      {/* Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Demonstração</CardTitle>
          <CardDescription>Clique para alternar o tema da aplicação</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <ThemeToggle />
          <span className="text-sm text-muted-foreground">
            Escolha entre Claro, Escuro ou Sistema
          </span>
        </CardContent>
      </Card>

      {/* API Reference */}
      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-3">
          <p>
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{"<ThemeToggle />"}</code>
            {" "}— Não recebe props. Usa internamente o hook <code className="text-xs bg-muted px-1.5 py-0.5 rounded">useTheme()</code> do <code className="text-xs bg-muted px-1.5 py-0.5 rounded">next-themes</code>.
          </p>
          <p className="text-muted-foreground">
            Requer <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{"<ThemeProvider>"}</code> como ancestor (já configurado no root layout).
          </p>
        </CardContent>
      </Card>

      {/* Accessibility */}
      <Card>
        <CardHeader>
          <CardTitle>Acessibilidade</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Label <code className="text-xs bg-muted px-1.5 py-0.5 rounded">sr-only</code> &quot;Alternar tema&quot; para leitores de tela</li>
            <li>Ícones Sun/Moon com transição animada indicam o tema atual</li>
            <li>Usa <code className="text-xs bg-muted px-1.5 py-0.5 rounded">disableTransitionOnChange</code> para evitar flash durante troca</li>
            <li>Preferência persistida em localStorage, respeitando <code className="text-xs bg-muted px-1.5 py-0.5 rounded">prefers-color-scheme</code> no modo sistema</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
