//! DONE

import { useContext } from 'react'
import Services from '../services'

function TableHeader() {
  const { tableHeaderServices } = useContext(Services)
  const { tableLengthUpdate, searchFilter } = tableHeaderServices

  return (
    <div className='datatable__top-actions'>
      <label id='datatable-length-selector'>
        Show <select className='datatable__length-selector'
          onChange={tableLengthUpdate}
        >
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
        </select> entries
      </label>
      <label id='datatable-search-bar'>
        Search: <input type='search' className='datatable__search-bar'
          onInput={searchFilter}
        />
      </label>
    </div>
  )
}

export default TableHeader
