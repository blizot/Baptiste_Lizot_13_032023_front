//! DONE

import { useContext } from 'react'
import Services from '../services'

function TableFooter({ dataLength }) {
  const { tableFooterServices } = useContext(Services)
  const { entriesShownMin, entriesShownMax, totalEntries, pageMax, pageCurrent, pageNavigation } = tableFooterServices

  return (
    <div className='datatable__bottom'>
      <p>Showing {Math.min(dataLength, entriesShownMin + 1)} to {entriesShownMax} of {totalEntries} entries</p>
      <menu className='datatable__bottom-actions'>
        <li className='datatable__bottom-actions--seek'>
          <label id='page-seek-input'>
            Go to page: <input type='number' min='1' max={pageMax}
              className='datatable__seek-input'
              onInput={(event) => pageNavigation('seek', event)}
            />
          </label>
        </li>
        <li>
          <button disabled={pageCurrent === 1 ? true : false}
            onClick={() => pageNavigation('first')}>
              1
          </button>
        </li>
        <li>
          <button disabled={pageCurrent === 1 ? true : false}
            onClick={() => pageNavigation('previous')}>
              ◂
          </button>
        </li>
        <li>
          <button disabled className='datatable__bottom--page-indicator'>
            {pageCurrent}
          </button>
        </li>
        <li>
          <button disabled={pageCurrent === pageMax ? true : false}
            onClick={() => pageNavigation('next')}>
              ▸
          </button>
        </li>
        <li>
          <button disabled={pageCurrent === pageMax ? true : false}
            onClick={() => pageNavigation('last')}>
              {pageMax}
          </button>
        </li>
      </menu>
    </div>
  )
}

export default TableFooter
