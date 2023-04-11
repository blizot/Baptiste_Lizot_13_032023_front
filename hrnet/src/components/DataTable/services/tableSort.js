//! DONE

/**
 * sort the table according to a sorting key
 * @param {Array} data filtered data
 * @param {String} sortingKey 
 * @returns 
 */

function tableSort(data, sortingKey) {
  const sortedData = data.sort((a, b) => {
    // if both items to compare are numbers
    if (!isNaN(a[sortingKey]) && !isNaN(b[sortingKey])) {
      return parseInt(a[sortingKey]) - parseInt(b[sortingKey])
    }
  
    // if one or both items to compare are strings
    const itemA = a[sortingKey].toString().toLowerCase()
    const itemB = b[sortingKey].toString().toLowerCase()
    if (itemA < itemB) return -1
    if (itemA > itemB) return 1
    return 0
  })

  return sortedData
}

export default tableSort