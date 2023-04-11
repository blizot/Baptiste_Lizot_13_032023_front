//! DONE

/**
 * table search filter
 * @param {Event} event
 * @param {Array} data unmodifed/raw data
 * @returns 
 */

function filter(event, data) {
  const input = event?.target.value ?? ''
  if (input === '') return data

  const filteredData = data.filter(
    object => Object.values(object).join(' ')
      .toLowerCase().includes(input.toLowerCase())
  )
  return filteredData
}

export default filter