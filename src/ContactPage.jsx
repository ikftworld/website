import React, { useState } from 'react'
import { Mail } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      // const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      const payload = {
        service_id: serviceId,
        // template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        }
      }

      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('Failed to send message. Please try again later.')
      }
    } catch (err) {
      console.error(err)
      setStatus('Error sending message.')
    }
  }

  return (
    <section className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
          <Mail className="w-6 h-6"/> Contact Us
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          If you'd like to get in touch with our team, please fill out the form below. We will respond as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input name="name" value={formData.name} onChange={handleChange} type="text" required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input name="email" value={formData.email} onChange={handleChange} type="email" required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
          </div>
          <button type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow">
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{status}</p>}
      </div>
    </section>
  )
}
