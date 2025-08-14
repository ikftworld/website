import React from 'react'

export default function PrivacyOverlay({ onClose }) {
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
