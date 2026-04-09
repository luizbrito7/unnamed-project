"use client"

import { BreadcrumbNav } from "@/components/breadcrumb-nav"

// We use mock pathname via Next.js navigation, so we show static examples
export default function BreadcrumbNavShowcase() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-bold tracking-tight">BreadcrumbNav</h1>
      <p className="text-muted-foreground mt-1 mb-8">
        Breadcrumb dinâmico baseado na rota atual. Usa <code className="bg-muted px-1.5 py-0.5 rounded text-xs">usePathname()</code> do Next.js.
      </p>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Exemplo ao vivo</h2>
        <div className="h-px bg-border mb-6" />
        <p className="text-sm text-muted-foreground mb-4">
          O breadcrumb abaixo reflete a rota atual desta página no styleguide.
        </p>
        <div className="rounded-lg border p-4">
          <BreadcrumbNav />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Mapeamento de rotas</h2>
        <div className="h-px bg-border mb-6" />
        <div className="text-sm space-y-1">
          <p><code className="bg-muted px-1.5 py-0.5 rounded text-xs">/dashboard</code> → Home &gt; Dashboard</p>
          <p><code className="bg-muted px-1.5 py-0.5 rounded text-xs">/skills</code> → Home &gt; Skills</p>
          <p><code className="bg-muted px-1.5 py-0.5 rounded text-xs">/certifications</code> → Home &gt; Certificações</p>
          <p><code className="bg-muted px-1.5 py-0.5 rounded text-xs">/meetings</code> → Home &gt; Reuniões</p>
          <p><code className="bg-muted px-1.5 py-0.5 rounded text-xs">/meetings/123</code> → Home &gt; Reuniões &gt; 123</p>
          <p><code className="bg-muted px-1.5 py-0.5 rounded text-xs">/team</code> → Home &gt; Time</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">API Reference</h2>
        <div className="h-px bg-border mb-6" />
        <div className="text-sm space-y-2">
          <p><code className="bg-muted px-1.5 py-0.5 rounded text-xs">BreadcrumbNav</code> — Não recebe props. Usa <code className="bg-muted px-1.5 py-0.5 rounded text-xs">usePathname()</code> internamente.</p>
          <p>Primeiro item sempre é &quot;Home&quot; (link para <code className="bg-muted px-1.5 py-0.5 rounded text-xs">/dashboard</code>).</p>
          <p>Último item é <code className="bg-muted px-1.5 py-0.5 rounded text-xs">BreadcrumbPage</code> (não clicável).</p>
          <p>Segmentos sem label mapeado exibem o slug original.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Acessibilidade</h2>
        <div className="h-px bg-border mb-6" />
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Usa elemento <code className="bg-muted px-1.5 py-0.5 rounded text-xs">&lt;nav&gt;</code> com <code className="bg-muted px-1.5 py-0.5 rounded text-xs">aria-label=&quot;breadcrumb&quot;</code></li>
          <li>Links intermediários são navegáveis via teclado</li>
          <li>Página atual marcada com <code className="bg-muted px-1.5 py-0.5 rounded text-xs">aria-current=&quot;page&quot;</code></li>
        </ul>
      </section>
    </div>
  )
}
