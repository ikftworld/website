import React from 'react'

export default function UseCases() {
  const cases = [
    {title: 'Legacy integration', desc: 'Easily add agentic functionality to your legacy stack.'},
    {title: 'Launch agentic Neobank', desc: 'Launch a fully agentic FinTech platform in weeks.'},
    {title: 'Smart dispute management', desc: 'Add AI-powered dispute management to your platform.'},
  ]
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h3 className="text-xl font-bold">Built for modern use cases</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {cases.map(c => (
            <div key={c.title} className="p-6 bg-white rounded-lg card-shadow">
              <div className="text-sm text-slate-500">Use case</div>
              <div className="mt-2 font-semibold">{c.title}</div>
              <p className="mt-2 text-slate-600 text-sm">{c.desc}</p>
            {/* <div className="mt-4 text-sm"><a className="text-primary hover:underline" href="#">Learn how →</a></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


