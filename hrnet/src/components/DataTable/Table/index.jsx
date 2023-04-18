import React from 'react'
import { useContext } from 'react'
import Services from '../services'

import TableHeader from './TableHeader'
import TableFooter from './TableFooter'
import './style.css'

function Table({ data, layout }) {
  const { tableServices } = useContext(Services)
  const { dataSortClick, sortingKey, sortingReversed } = tableServices

  return (
    <>
      <div className='datatable'>
        <TableHeader />
        <table className='datatable__table'>
          <thead className='datatable__head'>
            <tr>
              {layout.map((layout, index) =>
                <th key={`header-${index}`}>
                  <button data-key={layout.key}
                    className={layout.key === sortingKey ? sortingReversed ? 'datatable__head--selected-reversed' : 'datatable__head--selected' : undefined}
                    onClick={dataSortClick}
                    >{layout.header}
                  </button>
                </th>
              )}
            </tr>
          </thead>
          <tbody className='datatable__body'>
            {data.map((item, index) =>
              <tr key={`tr-${index}`}>
                {layout.map((layout, index) =>
                  <td key={`td-${index}`}
                    className={layout.key === sortingKey ? 'datatable__body--highlight' : undefined}
                  >{item[layout.key]}</td>
                )}
              </tr>
            )}
            {data.length === 0 &&
              <tr className='datatable__body--no-data'>
                <td colSpan='1000'>
                  No data available
                </td>
              </tr>
            }
          </tbody>
        </table>
        <TableFooter dataLength={data.length} />
      </div>
    </>
  )
}

export default Table
