import { LoginForm } from "@/components/login-form"
import { ForgotPasswordLink } from "@/components/forgot-password-link"
import { RegisterLink } from "@/components/register-link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function LoginFormPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold">LoginForm</h1>
        <p className="text-muted-foreground mt-1">
          Formulário de login com campos de email e senha, toggle de visibilidade, link para recuperação de senha e botão de submit.
        </p>
      </div>

      {/* Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Demonstração</CardTitle>
          <CardDescription>Formulário isolado como renderizado dentro da página /login</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </CardContent>
      </Card>

      {/* Sub-components */}
      <Card>
        <CardHeader>
          <CardTitle>Sub-componentes</CardTitle>
          <CardDescription>Componentes individuais usados pelo LoginForm</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">ForgotPasswordLink</h3>
            <p className="text-sm text-muted-foreground">
              Link para a página de recuperação de senha.
            </p>
            <div className="p-4 border rounded-lg">
              <ForgotPasswordLink />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold">RegisterLink</h3>
            <p className="text-sm text-muted-foreground">
              Texto com link para a página de criação de conta.
            </p>
            <div className="p-4 border rounded-lg">
              <RegisterLink />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Reference */}
      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-4">
          <div className="space-y-1">
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{"<LoginForm />"}</code>
            <p className="text-muted-foreground">
              Não recebe props. Renderiza um formulário com email, senha (com toggle de visibilidade), link de recuperação e botão de submit.
              O <code className="text-xs bg-muted px-1.5 py-0.5 rounded">onSubmit</code> faz <code className="text-xs bg-muted px-1.5 py-0.5 rounded">preventDefault()</code> (protótipo).
            </p>
          </div>
          <div className="space-y-1">
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{"<ForgotPasswordLink />"}</code>
            <p className="text-muted-foreground">
              Não recebe props. Renderiza um <code className="text-xs bg-muted px-1.5 py-0.5 rounded">Link</code> para <code className="text-xs bg-muted px-1.5 py-0.5 rounded">/forgot-password</code>.
            </p>
          </div>
          <div className="space-y-1">
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{"<RegisterLink />"}</code>
            <p className="text-muted-foreground">
              Não recebe props. Renderiza texto com <code className="text-xs bg-muted px-1.5 py-0.5 rounded">Link</code> para <code className="text-xs bg-muted px-1.5 py-0.5 rounded">/register</code>.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility */}
      <Card>
        <CardHeader>
          <CardTitle>Acessibilidade</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Campos usam <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{"<Label htmlFor>"}</code> associados ao <code className="text-xs bg-muted px-1.5 py-0.5 rounded">id</code> dos inputs</li>
            <li>Campo email usa <code className="text-xs bg-muted px-1.5 py-0.5 rounded">type=&quot;email&quot;</code> para validação nativa e teclado otimizado em mobile</li>
            <li>Botão de visibilidade da senha usa <code className="text-xs bg-muted px-1.5 py-0.5 rounded">aria-label</code> dinâmico (&quot;Mostrar senha&quot; / &quot;Ocultar senha&quot;)</li>
            <li>Atributo <code className="text-xs bg-muted px-1.5 py-0.5 rounded">required</code> em ambos os campos para validação HTML nativa</li>
            <li>Formulário usa tag semântica <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{"<form>"}</code></li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
