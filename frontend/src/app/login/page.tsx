import Link from "next/link"
import { LoginForm } from "@/components/login-form"
import { RegisterLink } from "@/components/register-link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Entrar na sua conta
          </h1>
          <p className="text-sm text-muted-foreground">
            Insira seu email e senha para continuar
          </p>
        </div>

        <LoginForm />

        <RegisterLink />

        <p className="text-center text-xs text-muted-foreground leading-relaxed">
          Ao continuar, você concorda com nossos{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Termos de Serviço
          </Link>{" "}
          e{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Política de Privacidade
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
