import React from 'react'

export default function CTABand() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 rounded-xl p-8 bg-gradient-to-r from-indigo-50 to-slate-50 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h4 className="text-lg font-bold">Ship production-ready fintech in weeks</h4>
          <p className="mt-2 text-slate-600">Start with a sandbox, integrate your rails, and go live with PCI-scoped options.</p>
        </div>
        <div className="mt-6 md:mt-0">
          <a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-white font-medium" href="https://docs.ikft.world" target="_blank">Get started</a>
        </div>
      </div>
    </section>
  )
}

