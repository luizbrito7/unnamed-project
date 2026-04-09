import Link from "next/link"

export function ForgotPasswordLink() {
  return (
    <Link
      href="/forgot-password"
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      Esqueceu a senha?
    </Link>
  )
}
