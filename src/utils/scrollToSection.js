/**
 * Smoothly scrolls to an element with a given id.
 * Falls back gracefully if the element isn't found.
 *
 * @param {string} id - The id of the DOM element to scroll to
 */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    console.warn(`[scrollToSection] No element found with id="${id}"`)
  }
}
