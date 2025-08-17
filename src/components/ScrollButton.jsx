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
export default function ScrollButton({ targetId, offset = 0, children, className = '', closeMenu }) {
  return (
    <button
      onClick={() => {
        scrollToSection(targetId, offset)
        closeMenu()
      }}
      className={`hover:text-indigo-600 dark:hover:text-indigo-400 ${className}`}
    >
      {children}
    </button>
  )
}
