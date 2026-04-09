import Link from "next/link"

export function RegisterLink() {
  return (
    <p className="text-center text-sm text-muted-foreground">
      Não tem uma conta?{" "}
      <Link
        href="/register"
        className="underline underline-offset-4 hover:text-foreground transition-colors"
      >
        Criar conta
      </Link>
    </p>
  )
}
