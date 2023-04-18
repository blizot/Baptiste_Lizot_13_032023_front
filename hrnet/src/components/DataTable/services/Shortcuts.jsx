import React from 'react'
import { useEffect, useContext, useState } from 'react'
import Services from '.'

function Shortcuts({ children }) {
  const { shortcutsServices } = useContext(Services)
  const { searchFilter, pageNavigation } = shortcutsServices

  const [buttonId, setButtonId] = useState(0)

  function keyboardCtrlShortcuts(event) {
    switch (event.key.toUpperCase()) {
      // focus on the table's search bar
      case 'F':
        event.preventDefault()
        document.getElementById('datatable-search-bar').focus()
        break
      // focus on the table's page seeker
      case 'S':
        event.preventDefault()
        document.getElementById('page-seek-input').focus()
        break
      // focus on the table's length selector
      case 'D':
        event.preventDefault()
        document.getElementById('datatable-length-selector').focus()
        break
      case 'R':
        event.preventDefault()
        const buttons = document.querySelectorAll('.datatable__head button')

        buttons[buttonId].click()
        buttons[buttonId].focus()

        // so it selects the next button on the next call,
        // or loops back around if we reached the end
        setButtonId((buttonId + 1) % buttons.length)
        break
      case '/' || '?':
        event.preventDefault()
        document.getElementById('shortcuts-notice').showModal()
        break
      default:
        return
    }
  }

  function keyboardDeleteKey(event) {
    if (event.target.tagName !== 'INPUT') return

    switch(event.target.type) {
      // clear input elements
      case 'search':
        event.target.value = ''
        setTimeout(() => event.target.focus())
        searchFilter(event)
        break
      case 'number':
        event.target.value = ''
        setTimeout(() => event.target.focus())
        break
      default:
        return
    }
  }

  function keyboardEscapeKey(event) {
    if (!['SELECT', 'INPUT', 'BUTTON', 'BODY'].includes(event.target.tagName)) return

    if (event.target.tagName === 'BODY') {
      document.getElementById('datatable-search-bar').firstElementChild.value = ''
      document.getElementById('page-seek-input').firstElementChild.value = ''
      searchFilter()
    }

    if (event.target.tagName === 'BUTTON') setButtonId(0)

    // remove focus from input elements
    event.preventDefault()
    event.target.blur()
  }

  function keyboardNavigatePage(event) {
    if(!['BODY'].includes(document.activeElement.tagName)) return

    switch(event.key) {
      case 'ArrowLeft':
        pageNavigation('previous')
        break
      case 'ArrowRight':
        pageNavigation('next')
        break
      case 'Home':
        pageNavigation('first')
        break
      case 'End':
        pageNavigation('last')
        break
      default:
        return
    }
  }

  // HUB
  function keyboardNavigation(event) {
    if (!['D', 'F', 'R', 'S'].includes(event.key.toUpperCase())
      && !['Home', 'End', 'ArrowLeft', 'ArrowRight', 'Delete', 'Escape', '/', '?'].includes(event.key)
    ) return

    if (event.ctrlKey) return keyboardCtrlShortcuts(event)
    if (event.key === 'Delete') return keyboardDeleteKey(event)
    if (event.key === 'Escape') return keyboardEscapeKey(event)
    return keyboardNavigatePage(event)
  }

  // add keydown event listener to the window
  useEffect(() => {
    const keyboardNavigationEffect = (event) => keyboardNavigation(event)

    window.addEventListener('keydown', keyboardNavigationEffect)

    return () => {
      window.removeEventListener('keydown', keyboardNavigationEffect)
    }
  })

  return (
    <>
      { children }
      <p className='datatable__shortcuts'><code>Ctrl</code> <code>/</code> — display shortcuts help</p>
      <dialog id='shortcuts-notice' className='datatable__shortcuts-modal'>
        <div className='datatable__shortcuts'>
          <p>Press <code>Esc</code> to close this help notice</p>
          <p><br /></p>
          <p><code>Ctrl</code> <code>F</code> — focus on the search bar</p>
          <p><code>Ctrl</code> <code>S</code> — focus on the page seeker</p>
          <p><code>Ctrl</code> <code>D</code> — focus on the data length selector</p>
          <p><code>Ctrl</code> <code>R</code> — focus and click on the first/next ranking button</p>
          <p><code>Esc</code> — clear the search filter</p>
          <p><code>◂</code> / <code>▸</code> — navigate to the previous/next page</p>
          <p><code>Home</code> — navigate to the first page</p>
          <p><code>End</code> — navigate to the last page</p>
          <p><br /></p>
          <p>On selected elements:</p>
          <p><code>Esc</code> — remove focus from the currently selected element</p>
          <p><code>Delete</code> — clear the selected input</p>
        </div>
      </dialog>
    </>
  )
}

export default Shortcuts
