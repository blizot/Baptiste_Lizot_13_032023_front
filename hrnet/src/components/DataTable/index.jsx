//! DONE

import { useEffect, useState } from 'react'

import Table from './Table'

import Services from './services'
import Shortcuts from './services/Shortcuts'
import pageNavigationHub from './services/pageNavigation'
import filter from './services/searchFilter'
import tableSort from './services/tableSort'

function DataTable({data, layout}) {
  const [filteredData, setFilteredData] = useState(data)
  const [sortedData, setSortedData] = useState(data)
  const [slicedData, setSlicedData] = useState([])
  const [sortingSettings, setSortingSettings] = useState({key: undefined, reversed: false})
  const [pageCurrent, setPageCurrent] = useState(1)
  const [tableLength, setTableLength] = useState(10)
  
  const totalEntries = filteredData.length
  const entriesShownMin = (pageCurrent - 1) * tableLength
  const entriesShownMax = Math.min((entriesShownMin + tableLength), totalEntries)
  const pageMax = Math.ceil(totalEntries / tableLength) || 1

  useEffect(() => {
    const slicedData = sortedData.slice(entriesShownMin, entriesShownMax)
    setSlicedData(slicedData)
  }, [sortedData, entriesShownMin, entriesShownMax])

  // table data sorting
  useEffect(() => {
    if (sortingSettings.key === undefined) return setSortedData(filteredData)
    
    const sortedData = tableSort(filteredData, sortingSettings.key)

    setSortedData([...sortedData])
    if (sortingSettings.reversed) setSortedData([...sortedData.reverse()])
  }, [filteredData, sortingSettings])

  // table data sorting - click event
  function dataSortClick(event) {
    const key = event.target.dataset.key

    if (sortingSettings.key === key) return setSortingSettings({...sortingSettings, reversed: !sortingSettings.reversed})
    
    setSortingSettings({key: key, reversed: false})
  }

  // table shown data length
  function tableLengthUpdate(event) {
    // reset the page to avoid going out of bounds
    setPageCurrent(1)
    setTableLength(parseInt(event.target.value))
  }

  // table search filter
  function searchFilter(event) {
    // reset the page to avoid going out of bounds
    setPageCurrent(1)
    const filteredData = filter(event, data)
    setFilteredData(filteredData)
  }

  // table page navigation
  function pageNavigation(action, event) {
    const integer = pageNavigationHub(action, event, pageCurrent, pageMax)
    setPageCurrent(integer)
  }
  
  const tableServices = { dataSortClick, sortingKey: sortingSettings.key, sortingReversed: sortingSettings.reversed }
  const tableHeaderServices = { tableLengthUpdate, searchFilter }
  const tableFooterServices = { entriesShownMin, entriesShownMax, totalEntries, pageMax, pageCurrent, pageNavigation }
  const shortcutsServices = { searchFilter, pageNavigation }

  const servicesProvider = { tableServices, tableHeaderServices, tableFooterServices, shortcutsServices }

  return (
    <Services.Provider value={servicesProvider}>
      <Shortcuts data={data}>
        <Table data={slicedData} layout={layout} />
      </Shortcuts>
    </Services.Provider>
  )
}

export default DataTable
