import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
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
