import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Linkedin, Send, Instagram, Github } from 'lucide-react'
import PrivacyOverlay from './PrivacyOverlay'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import UseCases from './components/UseCases'
import AboutCompany from './components/AboutCompany'
import CTABand from './components/CTABand'
import ConsentBanner from './components/ConsentBanner'

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
        <Features />
        <UseCases />
        <AboutCompany />
        <CTABand />
      </main>
      <ConsentBanner />
      <Footer onShowPrivacy={() => setShowPrivacy(true)} />
      {showPrivacy && <PrivacyOverlay onClose={() => setShowPrivacy(false)} />}
    </div>
  )
}

{/*
function Trusted(){
  const logos = [
    { src: '/logos/company1.svg', alt: 'Company 1' },
    { src: '/logos/company2.svg', alt: 'Company 2' },
    { src: '/logos/company3.svg', alt: 'Company 3' },
    { src: '/logos/company4.svg', alt: 'Company 4' }
  ]

  return (
    <section className="py-12 border-t border-b">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Trusted by leading fintech innovators</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {logos.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-10 mx-auto" />
          ))}
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
*/}

function Footer({ onShowPrivacy }) {
  const social = [
    {icon: <Linkedin className="w-5 h-5 text-primary"/>, url: 'https://www.linkedin.com/company/ikft/'},
    {icon: <Send className="w-5 h-5 text-primary"/>, url: 'https://t.me/ikftworld'},
    {icon: <Instagram className="w-5 h-5 text-primary"/>, url: 'https://www.instagram.com/ikft.world/'},
    {icon: <Github className="w-5 h-5 text-primary"/>, url: 'https://github.com/ikftworld'},
  ]

  return (
    <footer className="mt-12 border-t py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} IKFT — All rights reserved</div>
        <div className="flex gap-4 text-sm">
          {social.map((it) => (
            <a href={it.url} target="_blank" key={it.url}>
              {it.icon}
            </a>
          ))}
        </div>
        <div className="flex gap-4 text-sm">
          <button onClick={onShowPrivacy} className="hover:underline">Privacy</button>
          {/* <a href="#terms" className="hover:underline">Terms</a> */}
          <Link to="/investors" className="hover:underline">Investors</Link>
        </div>
      </div>
    </footer>
  )
}
