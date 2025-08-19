import React from 'react'
import { Cpu, CreditCard, Layers, ShieldCheck, Plug, PlugZap } from 'lucide-react'

export default function Features(){
  const items = [
    {icon: <Cpu className="w-5 h-5 text-primary"/>, title: 'Agentic Core', desc: 'A fully Agentic financial platform.'},
    {icon: <Plug className="w-5 h-5 text-primary"/>, title: 'Agentic Connect', desc: 'Extend your legacy platform with Agentic functionality. Fully customizable to your needs.'},
    {icon: <CreditCard className="w-5 h-5 text-primary"/>, title: 'Cards & Issuance', desc: 'Virtual and physical card issuance with metadata and controls.'},
    {icon: <Layers className="w-5 h-5 text-primary"/>, title: 'Programmable Ledgers', desc: 'Multi-ledger support, double-entry primitives, and reconciliation.'},
    {icon: <ShieldCheck className="w-5 h-5 text-primary"/>, title: 'Compliance & Risk', desc: 'Built-in AML hooks, webhooks for alerts, and risk scoring.'},
    {icon: <PlugZap className="w-5 h-5 text-primary"/>, title: 'Integrations', desc: 'Accounting, payroll, and payment rails via modular connectors.'},
  ]

  return (
    <section id="product" className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-bold">Complete platform primitives</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-600 max-w-2xl">Everything you need to build financial products: from card controls to full reconciliation and programmable money flows.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 border rounded-lg flex gap-4 items-start">
              {it.icon}
              <div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-500 text-sm">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

