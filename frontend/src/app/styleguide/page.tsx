"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  // Navigation
  LayoutDashboard, CreditCard, Wallet, FileText, BarChart2, Settings, HelpCircle, Menu, ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  // Actions
  ArrowUpRight, ArrowDownLeft, Send, Download, Upload, Plus, Minus, X, Check, Search, Filter, RefreshCw, Edit2, Trash2, Copy, ExternalLink,
  // Finance
  DollarSign, TrendingUp, TrendingDown, PiggyBank, Receipt, Landmark, Banknote, CircleDollarSign, ArrowLeftRight, Repeat,
  // Status & feedback
  CheckCircle, XCircle, AlertCircle, AlertTriangle, Info, Bell, BellOff, Clock, Lock, Unlock, ShieldCheck, Eye, EyeOff,
  // UI & misc
  Sun, Moon, User, Users, Mail, Phone, Globe, Home, Star, Bookmark, Heart, Share2, Link, QrCode, ScanLine, MoreHorizontal, MoreVertical, Loader2,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import type { LucideIcon } from "lucide-react"

function IconTile({ icon: Icon, name }: { icon: LucideIcon; name: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors group cursor-pointer">
      <Icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" strokeWidth={1.75} />
      <span className="text-[10px] text-muted-foreground font-mono text-center leading-tight">{name}</span>
    </div>
  )
}

function IconGroup({ title, icons }: { title: string; icons: { icon: LucideIcon; name: string }[] }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{title}</p>
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1">
        {icons.map(({ icon, name }) => (
          <IconTile key={name} icon={icon} name={name} />
        ))}
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <div className="h-px bg-border mb-6" />
      {children}
    </section>
  )
}

function ColorSwatch({ variable, label, textClass }: { variable: string; label: string; textClass?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-14 rounded-lg border border-border/50 shadow-sm"
        style={{ background: `var(${variable})` }}
      />
      <p className={`text-xs font-mono font-medium ${textClass ?? "text-foreground"}`}>{variable}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}

function RadiusExample({ label, className }: { label: string; className: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-16 h-16 bg-primary ${className}`} />
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}

function ShadowExample({ label, className }: { label: string; className: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-20 h-14 bg-card rounded-lg ${className}`} />
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}

export default function StyleguidePage() {
  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Design Tokens</h1>
          <p className="text-muted-foreground mt-1">
            Visual reference for the design system
          </p>
        </div>
        <ThemeToggle />
      </div>

      {/* Colors - Semantic */}
      <Section title="Semantic Colors">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ColorSwatch variable="--primary" label="Primary — Black #000000" />
          <ColorSwatch variable="--destructive" label="Destructive — Red (semantic)" />
          <ColorSwatch variable="--success" label="Success — Green" />
          <ColorSwatch variable="--warning" label="Warning — Amber" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <ColorSwatch variable="--info" label="Info — Blue" />
          <ColorSwatch variable="--muted" label="Muted" />
          <ColorSwatch variable="--secondary" label="Secondary" />
          <ColorSwatch variable="--accent" label="Accent" />
        </div>
      </Section>

      {/* Colors - Base */}
      <Section title="Base Colors">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ColorSwatch variable="--background" label="Background" />
          <ColorSwatch variable="--foreground" label="Foreground" />
          <ColorSwatch variable="--card" label="Card" />
          <ColorSwatch variable="--border" label="Border" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <ColorSwatch variable="--muted-foreground" label="Muted Foreground" />
          <ColorSwatch variable="--input" label="Input" />
          <ColorSwatch variable="--ring" label="Ring" />
          <ColorSwatch variable="--popover" label="Popover" />
        </div>
      </Section>

      {/* Colors - Charts */}
      <Section title="Chart Colors">
        <div className="grid grid-cols-5 gap-4">
          <ColorSwatch variable="--chart-1" label="Chart 1 — Black #000000" />
          <ColorSwatch variable="--chart-2" label="Chart 2 — Dark Gray #66666E" />
          <ColorSwatch variable="--chart-3" label="Chart 3 — Mid Gray #9999A1" />
          <ColorSwatch variable="--chart-4" label="Chart 4 — Light Gray #E6E6E9" />
          <ColorSwatch variable="--chart-5" label="Chart 5 — Near White #F4F4F6" />
        </div>
      </Section>

      {/* Colors - Sidebar */}
      <Section title="Sidebar Colors">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ColorSwatch variable="--sidebar" label="Sidebar" />
          <ColorSwatch variable="--sidebar-foreground" label="Sidebar Foreground" />
          <ColorSwatch variable="--sidebar-primary" label="Sidebar Primary" />
          <ColorSwatch variable="--sidebar-accent" label="Sidebar Accent" />
        </div>
      </Section>

      {/* Typography */}
      <Section title="Typography">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs text-muted-foreground mb-1 font-mono">text-4xl font-bold</p>
            <p className="text-4xl font-bold">The quick brown fox</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1 font-mono">text-3xl font-semibold</p>
            <p className="text-3xl font-semibold">The quick brown fox</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1 font-mono">text-2xl font-semibold</p>
            <p className="text-2xl font-semibold">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1 font-mono">text-xl font-medium</p>
            <p className="text-xl font-medium">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1 font-mono">text-base (body)</p>
            <p className="text-base">The quick brown fox jumps over the lazy dog. Geist is a clean, modern typeface optimized for financial interfaces and data-dense dashboards.</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1 font-mono">text-sm text-muted-foreground</p>
            <p className="text-sm text-muted-foreground">Supporting text, labels, and secondary information appear at this size.</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1 font-mono">text-xs font-mono</p>
            <p className="text-xs font-mono">$88,232.00 · 0x1A2B3C · var(--primary)</p>
          </div>
        </div>
      </Section>

      {/* Border Radius */}
      <Section title="Border Radius">
        <div className="flex items-end gap-8 flex-wrap">
          <RadiusExample label="radius-sm" className="rounded-sm" />
          <RadiusExample label="radius-md" className="rounded-md" />
          <RadiusExample label="radius-lg (base)" className="rounded-lg" />
          <RadiusExample label="rounded-xl" className="rounded-xl" />
          <RadiusExample label="rounded-2xl" className="rounded-2xl" />
          <RadiusExample label="rounded-full" className="rounded-full" />
        </div>
      </Section>

      {/* Shadows */}
      <Section title="Shadows">
        <div className="flex items-end gap-10 flex-wrap">
          <ShadowExample label="shadow-sm" className="shadow-sm" />
          <ShadowExample label="shadow" className="shadow" />
          <ShadowExample label="shadow-md" className="shadow-md" />
          <ShadowExample label="shadow-lg" className="shadow-lg" />
          <ShadowExample label="shadow-xl" className="shadow-xl" />
        </div>
      </Section>

      {/* Button Component */}
      <Section title="Button">
        <div className="flex flex-wrap gap-3 mb-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      {/* Card Component */}
      <Section title="Card">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Balance</CardTitle>
              <CardDescription>Across all accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$88,232.00</p>
              <p className="text-sm text-success mt-1">+4.98% this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Income</CardTitle>
              <CardDescription>April 2026</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$18,500.99</p>
              <p className="text-sm text-muted-foreground mt-1">Target: $20,000</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Badge Component */}
      <Section title="Badge">
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge className="bg-success text-success-foreground">Success</Badge>
          <Badge className="bg-warning text-warning-foreground">Warning</Badge>
          <Badge className="bg-info text-info-foreground">Info</Badge>
        </div>
      </Section>

      {/* Alert Component */}
      <Section title="Alert">
        <div className="flex flex-col gap-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              Your monthly savings target has been achieved. Great job!
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Payment Failed</AlertTitle>
            <AlertDescription>
              Your transaction could not be processed. Please check your payment details.
            </AlertDescription>
          </Alert>
        </div>
      </Section>

      {/* Radio Group Component */}
      <Section title="Radio Group">
        <Card className="max-w-sm p-6">
          <p className="text-sm font-medium mb-4">Transfer Speed</p>
          <RadioGroup defaultValue="instant">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="instant" id="instant" />
              <Label htmlFor="instant">Instant — $0.99 fee</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard">Standard — Free (1–3 days)</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="scheduled" id="scheduled" />
              <Label htmlFor="scheduled">Scheduled — Free</Label>
            </div>
          </RadioGroup>
        </Card>
      </Section>

      {/* Icons */}
      <Section title="Icons — Lucide">
        <IconGroup title="Navigation" icons={[
          { icon: LayoutDashboard, name: "LayoutDashboard" },
          { icon: CreditCard, name: "CreditCard" },
          { icon: Wallet, name: "Wallet" },
          { icon: FileText, name: "FileText" },
          { icon: BarChart2, name: "BarChart2" },
          { icon: Settings, name: "Settings" },
          { icon: HelpCircle, name: "HelpCircle" },
          { icon: Menu, name: "Menu" },
          { icon: ChevronLeft, name: "ChevronLeft" },
          { icon: ChevronRight, name: "ChevronRight" },
          { icon: ChevronDown, name: "ChevronDown" },
          { icon: ChevronUp, name: "ChevronUp" },
        ]} />
        <IconGroup title="Actions" icons={[
          { icon: ArrowUpRight, name: "ArrowUpRight" },
          { icon: ArrowDownLeft, name: "ArrowDownLeft" },
          { icon: Send, name: "Send" },
          { icon: Download, name: "Download" },
          { icon: Upload, name: "Upload" },
          { icon: Plus, name: "Plus" },
          { icon: Minus, name: "Minus" },
          { icon: X, name: "X" },
          { icon: Check, name: "Check" },
          { icon: Search, name: "Search" },
          { icon: Filter, name: "Filter" },
          { icon: RefreshCw, name: "RefreshCw" },
          { icon: Edit2, name: "Edit2" },
          { icon: Trash2, name: "Trash2" },
          { icon: Copy, name: "Copy" },
          { icon: ExternalLink, name: "ExternalLink" },
        ]} />
        <IconGroup title="Finance" icons={[
          { icon: DollarSign, name: "DollarSign" },
          { icon: TrendingUp, name: "TrendingUp" },
          { icon: TrendingDown, name: "TrendingDown" },
          { icon: PiggyBank, name: "PiggyBank" },
          { icon: Receipt, name: "Receipt" },
          { icon: Landmark, name: "Landmark" },
          { icon: Banknote, name: "Banknote" },
          { icon: CircleDollarSign, name: "CircleDollarSign" },
          { icon: ArrowLeftRight, name: "ArrowLeftRight" },
          { icon: Repeat, name: "Repeat" },
        ]} />
        <IconGroup title="Status & Feedback" icons={[
          { icon: CheckCircle, name: "CheckCircle" },
          { icon: XCircle, name: "XCircle" },
          { icon: AlertCircle, name: "AlertCircle" },
          { icon: AlertTriangle, name: "AlertTriangle" },
          { icon: Info, name: "Info" },
          { icon: Bell, name: "Bell" },
          { icon: BellOff, name: "BellOff" },
          { icon: Clock, name: "Clock" },
          { icon: Lock, name: "Lock" },
          { icon: Unlock, name: "Unlock" },
          { icon: ShieldCheck, name: "ShieldCheck" },
          { icon: Eye, name: "Eye" },
          { icon: EyeOff, name: "EyeOff" },
        ]} />
        <IconGroup title="UI & Misc" icons={[
          { icon: Sun, name: "Sun" },
          { icon: Moon, name: "Moon" },
          { icon: User, name: "User" },
          { icon: Users, name: "Users" },
          { icon: Mail, name: "Mail" },
          { icon: Phone, name: "Phone" },
          { icon: Globe, name: "Globe" },
          { icon: Home, name: "Home" },
          { icon: Star, name: "Star" },
          { icon: Bookmark, name: "Bookmark" },
          { icon: Heart, name: "Heart" },
          { icon: Share2, name: "Share2" },
          { icon: Link, name: "Link" },
          { icon: QrCode, name: "QrCode" },
          { icon: ScanLine, name: "ScanLine" },
          { icon: MoreHorizontal, name: "MoreHorizontal" },
          { icon: MoreVertical, name: "MoreVertical" },
          { icon: Loader2, name: "Loader2" },
        ]} />
      </Section>

      {/* Design Summary */}
      <Section title="Design Summary">
        <Card className="max-w-lg">
          <CardContent className="pt-6">
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
              <dt className="font-medium text-muted-foreground">Primary color</dt>
              <dd className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded bg-primary border border-border" />
                #000000 — Black
              </dd>
              <dt className="font-medium text-muted-foreground">Muted foreground</dt>
              <dd className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded" style={{ background: "#9999A1" }} />
                #9999A1 — Mid Gray
              </dd>
              <dt className="font-medium text-muted-foreground">Background</dt>
              <dd className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded border border-border" style={{ background: "#F4F4F6" }} />
                #F4F4F6 — Near White
              </dd>
              <dt className="font-medium text-muted-foreground">Font</dt>
              <dd>Geist — geometric, clean sans-serif</dd>
              <dt className="font-medium text-muted-foreground">Style</dt>
              <dd>Monochromatic grayscale with cool blue undertone</dd>
              <dt className="font-medium text-muted-foreground">Border radius</dt>
              <dd>Rounded — 10px (0.625rem base)</dd>
              <dt className="font-medium text-muted-foreground">Shadows</dt>
              <dd>Subtle — cards use shadow-sm</dd>
              <dt className="font-medium text-muted-foreground">Overall feel</dt>
              <dd>Minimal, neutral — black on white with cool gray tones throughout</dd>
            </dl>
          </CardContent>
        </Card>
      </Section>
    </div>
  )
}
