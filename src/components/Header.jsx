import React, { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollButton from './ScrollButton'

export default function Header({ dark, setDark }){
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">AG</div>
              <span className="font-semibold text-gray-700 dark:text-gray-300">by IKFT</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-300">
            <ScrollButton targetId="product">Product</ScrollButton>
            <ScrollButton targetId="company">Company</ScrollButton>
            <ScrollButton targetId="careers" status="New">Careers</ScrollButton>
            <Link
              to="https://docs.ikft.world"
              target="_blank"
              className="block dark:text-gray-100"
            >
              <span className="relative">
                Documentation
                <span className="absolute -top-2 -right-5 pointer-events-none rounded-full bg-red-600 text-white text-[9px] font-bold px-1 leading-none">
                  New
                </span>
              </span>
            </Link>
            {/* Dark Mode Switch */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/investors">
              <button  className="ml-3 px-4 py-2 rounded-md text-white bg-primary pulse-investors">For Investors</button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">

          <div className="px-4 py-4 space-y-2">
            <ScrollButton
              targetId="product"
              className="block dark:text-gray-100"
              closeMenu={closeMenu}
            >Product</ScrollButton>
            <ScrollButton
              targetId="company"
              className="block dark:text-gray-100"
              closeMenu={closeMenu}
            >Company</ScrollButton>
            <ScrollButton
              targetId="careers"
              className="block dark:text-gray-100"
              closeMenu={closeMenu}>Careers</ScrollButton>
            <Link
              to="https://docs.ikft.com"
              target="_blank"
              className="block dark:text-gray-100"
            >Documentation</Link>
            <Link
              to="/investors"
              className="block dark:text-gray-100"
            >
              Investors
            </Link>

            {/* Dark Mode Switch (Mobile) */}
            <button
              onClick={() => {
                setDark(!dark)
                closeMenu()
              }}
              className="mt-2 w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
