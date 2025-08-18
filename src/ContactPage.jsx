import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Mail, ShieldCheck, Landmark } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState('')

  emailjs.init({
    publicKey,
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('Sending...')
    setSending(true)

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        from_name: formData.name,
        reply_to: formData.email,
      }
      await emailjs.send(serviceId, templateId, templateParams)
      navigate('/')
    } catch (err) {
      console.error(err)
      setStatus('Error sending message.')
    } finally {
      setSending(false)
    }
  }
return (
    <main className="py-16 md:py-20 bg-white dark:bg-slate-900">
      {/* Header / Hero strip (matches main page spacing/typography) */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border border-slate-200 text-slate-600 bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:bg-slate-800">
          <Landmark className="w-3.5 h-3.5" />
          Investor Relations
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Partner with IKFT
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          We’re building agentic Banking-as-a-Service infrastructure that makes any bank programmable.
          Share a bit about your firm below and we’ll follow up quickly.
        </p>
      </div>

      {/* Content grid */}
      <div className="mt-10 max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: trust + notes */}
        <aside className="lg:col-span-1">
          <div className="p-6 rounded-xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center gap-2 text-slate-800 dark:text-white font-semibold">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Compliant by design
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Built with auditability, access controls, and observability to meet bank-grade requirements.
            </p>
            <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              By submitting this form you agree to our{' '}
              <a href="#privacy" className="text-primary hover:underline">Privacy Policy</a>.
            </div>
          </div>

          <div className="mt-6 p-6 rounded-xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700">
            <h3 className="font-semibold text-slate-800 dark:text-white">What to expect</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Intro deck and product overview</li>
              <li>• Architecture & compliance briefing</li>
              <li>• Go-to-market and milestones</li>
            </ul>
          </div>
        </aside>

        {/* Right: form */}
        <section className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="jane@firm.com"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Firm / company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Example Capital"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  How can we tailor the conversation?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Stage, focus areas, check size, timelines…"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-white font-medium shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Mail className="w-4 h-4" />
                {sending ? 'Sending…' : 'Send message'}
              </button>
              {status && (
                <span className="text-sm text-slate-600 dark:text-slate-300">{status}</span>
              )}
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}
