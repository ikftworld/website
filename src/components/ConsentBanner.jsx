// src/components/ConsentBanner.jsx
import React, { useState, useEffect } from 'react'

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('consentGiven')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('consentGiven', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          We use cookies and collect minimal analytics to improve your experience.
          See our{' '}
          <a href="#privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="px-4 py-2 rounded-md bg-primary text-white text-sm font-medium shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConsentBanner

