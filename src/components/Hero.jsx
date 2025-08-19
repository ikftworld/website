import React from 'react'

export default function Hero() {
  return (
    <section className="gradient-hero py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block text-sm bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full mb-4">Beta • Programmable Money</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">IKFT — API-first infrastructure for agentic fintech</h1>
          <p className="mt-6 text-lg text-slate-700 max-w-xl">Build cards, ledgers, reconciliation, and programmable money flows with a single API. Scales from pilots to global production.</p>
          <p className="mt-6 text-lg text-slate-700 max-w-xl">Use IKFT stack with agentic features built in or make your stack AI powered by connecting to Agentic platform.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-white font-medium" href="https://docs.ikft.world" target="_blank">Get started — it's free</a>
          </div>

          <div className="mt-8 text-sm text-slate-600">Integrates with accounting, AML, and issuer partners. PCI scoped options available.</div>
        </div>

        <div className="relative">
          <div className="card-shadow rounded-2xl p-6 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-500">Balance</div>
                <div className="text-2xl font-semibold">$12,430.67</div>
              </div>
              <div className="text-sm text-slate-500">Live</div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-50">
                <div className="text-xs text-slate-500">Pending</div>
                <div className="mt-1 font-medium">$1,240.00</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-50">
                <div className="text-xs text-slate-500">Available</div>
                <div className="mt-1 font-medium">$11,190.67</div>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-500">Recent</div>
            <ul className="mt-2 space-y-2">
              <li className="flex justify-between text-sm"><span>Payment — ACME Corp</span><span className="font-medium">-$240.00</span></li>
              <li className="flex justify-between text-sm"><span>ACH inbound</span><span className="font-medium text-green-600">+$5,000.00</span></li>
              <li className="flex justify-between text-sm"><span>Card auth</span><span className="font-medium">-$12.50</span></li>
            </ul>
          </div>

          <div className="absolute -right-6 -bottom-6 w-48 h-48 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/10"></div>
        </div>
      </div>
    </section>
  )
}

