import React from 'react'

export default function AboutCompany() {
  return (
    <section id="company" className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-bold">About IKFT</h2>
        <p className="mt-4 text-slate-600 max-w-3xl">
          IKFT was founded by a team with deep expertise in building and scaling Banking-as-a-Service (BaaS) products.
          Our founders have led product and engineering teams at industry-leading platforms.
        </p>
        <p className="mt-4 text-slate-600 max-w-3xl">
          With experience launching compliant, global-ready infrastructure for cards, payments, and ledgers, our team is uniquely positioned to help
          fintech builders go from idea to production faster, while maintaining bank-grade security and compliance.
        </p>
      </div>
    </section>
  )
}

