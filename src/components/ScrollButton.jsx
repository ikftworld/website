import React from 'react'
import { scrollToSection } from '../utils/scrollToSection'

/**
 * A button that scrolls smoothly to a section by id.
 *
 * @param {string} targetId - The id of the target section
 * @param {number} offset - Optional offset (for sticky navbar)
 * @param {string} children - Button text or JSX
 * @param {string} className - Additional Tailwind classes
 */
export default function ScrollButton({ targetId, status = '', offset = 0, children, className = '', closeMenu }) {
  return (
    <span class="relative">
      <button
        onClick={() => {
          scrollToSection(targetId, offset)
          if (closeMenu) closeMenu()
        }}
        className={`hover:text-indigo-600 dark:hover:text-indigo-400 ${className}`}
      >
        <span className="absolute -top-2 -right-5 pointer-events-none rounded-full bg-red-600 text-white text-[9px] font-bold px-1 leading-none">
          {status}
        </span>
        {children}
      </button>
    </span>
  )
}
