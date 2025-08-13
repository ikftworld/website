import React, { useState, useEffect } from 'react'
import { Cpu, CreditCard, Layers, ShieldCheck, Plug, PlugZap } from 'lucide-react'

export default function App() {
  const [dark, setDark] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <div className={`font-sans min-h-screen ${dark ? 'bg-slate-900 text-slate-300' : 'bg-white text-slate-900'}`}>
      <Header dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Trusted />
        <Features />
        <UseCases />
        <Company />
        <CTABand />
      </main>
      <Footer onShowPrivacy={() => setShowPrivacy(true)} />
      {showPrivacy && <PrivacyOverlay onClose={() => setShowPrivacy(false)} />}
    </div>
  )
}

function Header({ dark, setDark }){
  return (
    <header className="py-6 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">AG</div>
        <span className="font-semibold">by IKFT</span>
      </div>
      <nav className="hidden md:flex gap-6 items-center text-sm">
        <a href="#product" className="hover:underline">Product</a>
        <a href="#company" className="hover:underline">Company</a>
        <a href="https://docs.ikft.world" className="hover:underline" target="_blank">Docs</a>
        <button onClick={() => setDark(!dark)} className="ml-4 px-3 py-2 rounded-md border text-sm">
          {dark ? '☀ Light' : '🌙 Dark'}
        </button>
        <a href="https://docs.ikft.world" target="_blank">
          <button className="ml-3 px-4 py-2 rounded-md text-white bg-primary">Get started</button>
        </a>
      </nav>
    </header>
  )
}

function Hero(){
  return (
    <section className="gradient-hero py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block text-sm bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full mb-4">Beta • Programmable Money</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">IKFT — API-first infrastructure for agentic fintech</h1>
          <p className="mt-6 text-lg text-slate-700 max-w-xl">Build cards, ledgers, reconciliation, and programmable money flows with a single API. Scales from pilots to global production.</p>
          <p className="mt-6 text-lg text-slate-700 max-w-xl">Use IKFT stack with agentic features built in or make your stack AI powered by connecting to Agentic platform.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-white font-medium" href="#get-started">Get started — it's free</a>
            <a className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-200 text-sm" href="https://docs.ikft.world" target="_blank">Read docs</a>
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

function Trusted(){
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <div className="text-sm text-slate-500">Trusted by</div>
        <div className="mt-6 flex items-center justify-center gap-8 flex-wrap">
          <Logo name="FinCorp"/>
          <Logo name="PayCo"/>
          <Logo name="Walletly"/>
          <Logo name="LedgerWorks"/>
        </div>
      </div>
    </section>
  )
}

function Logo({name}){
  return (
    <div className="text-xs text-slate-600 bg-slate-50 px-4 py-2 rounded-md">{name}</div>
  )
}

function Features(){
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
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">Everything you need to build financial products: from card controls to full reconciliation and programmable money flows.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 border rounded-lg flex gap-4 items-start">
              {it.icon}
              <div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCases() {
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

function Company() {
  return (
    <section id="company" className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-bold">About Agentic</h2>
        <p className="mt-4 text-slate-600 max-w-3xl">
          Agentic was founded by a team with deep expertise in building and scaling Banking-as-a-Service (BaaS) products.
          Our founders have led product and engineering teams at industry-leading platforms, including those behind
          <a href="https://mbanq.com/nebula" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> Mbanq Nebula</a> — a full-stack, cloud-native BaaS solution that powers fintech innovation around the world.
        </p>
        <p className="mt-4 text-slate-600 max-w-3xl">
          With experience launching compliant, global-ready infrastructure for cards, payments, and ledgers, our team is uniquely positioned to help
          fintech builders go from idea to production faster, while maintaining bank-grade security and compliance.
        </p>
      </div>
    </section>
  )
}

function CTABand(){
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 rounded-xl p-8 bg-gradient-to-r from-indigo-50 to-slate-50 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h4 className="text-lg font-bold">Ship production-ready fintech in weeks</h4>
          <p className="mt-2 text-slate-600">Start with a sandbox, integrate your rails, and go live with PCI-scoped options.</p>
        </div>
        <div className="mt-6 md:mt-0">
          <a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-weite font-medium" href="https://docs.ikft.world" target="_blank">Get started</a>
        </div>
      </div>
    </section>
  )
}

function Footer({ onShowPrivacy }) {
  return (
    <footer className="mt-12 border-t py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} Agentic — All rights reserved</div>
        <div className="flex gap-4 text-sm">
          <button onClick={onShowPrivacy} className="hover:underline">Privacy</button>
          {/* <a href="#terms" className="hover:underline">Terms</a> */}
          <a href="mailto:agentic@ikft.world" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}

function PrivacyOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 privacy-policy">
      <div className="bg-white dark:bg-slate-800 rounded-lg max-w-2xl w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 dark:hover:text-white">✕</button>
        <h2 className="text-xl font-bold mb-4 text-slate-300">Privacy Policy</h2>
        <div className="text-sm text-slate-300 space-y-3 max-h-[70vh] overflow-y-auto">
          <p><strong>Effective Date:</strong> August 13, 2025</p>

          <p>ikft (“we,” “our,” or “us”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the rights you have regarding your data.</p>

          <section>
            <h2>1. Information We Collect</h2>
            <p>We collect the email address you provide when you:</p>
            <ul>
              <li>Subscribe to our communications</li>
              <li>Sign up for updates or offers</li>
              <li>Contact us directly</li>
            </ul>
            <p>We do not collect any other personal information unless you choose to provide it.</p>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use your email address to:</p>
            <ul>
              <li>Send you marketing communications and promotional offers</li>
              <li>Share news, updates, and information about our products and services</li>
              <li>Respond to your inquiries or feedback</li>
            </ul>
            <p>You can opt out of marketing communications at any time by following the unsubscribe link in our emails or by contacting us directly.</p>
          </section>

          <section>
            <h2>3. Data Sharing and Disclosure</h2>
            <p>We do <strong>not</strong> sell, rent, or share your personal information with third parties. Your data remains within ikft and is only accessible to authorized team members who need it for the purposes described in this policy.</p>
          </section>

          <section>
            <h2>4. International Use</h2>
            <p>We operate globally. By providing your information, you understand that it may be processed and stored in countries where privacy laws may differ from those in your location. Regardless of where your data is stored, we take reasonable measures to protect it.</p>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to safeguard your information against unauthorized access, loss, misuse, or alteration. However, no method of transmission or storage is 100% secure.</p>
          </section>

          <section>
            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request corrections or updates to your data</li>
              <li>Ask us to delete your personal information</li>
              <li>Withdraw your consent to receive marketing communications</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:privacy@ikft.world">privacy@ikft.world</a>.</p>
          </section>

          <section>
            <h2>7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. When we do, we will revise the “Effective Date” at the top. Significant changes will be communicated through our website or by email.</p>
          </section>

          <section>
            <h2>8. Contact Us</h2>
            <p>For any questions or concerns about this Privacy Policy or our practices, you can reach us at:</p>
            <p><strong>Email:</strong> <a href="mailto:privacy@ikft.world">privacy@ikft.world</a></p>
          </section>
        </div>
      </div>
    </div>
  )
}
