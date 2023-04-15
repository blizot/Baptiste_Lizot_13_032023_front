/**
 * Fetches the /employees API endpoints
 * 
 * @param {String} endpoint - REQUIRED, must be a valid enpoint
 * @param {Object} body - defaults to an empty object
 * @param {String} method - HTTP verb, defaults to 'GET'
 * 
 * @returns {Object}
 */

async function fetchAPI(endpoint, body = null, method = 'GET') {
  const base = 'http://localhost:5000/api/v1'
  const url = base + endpoint

  const options = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: body && JSON.stringify(body),
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()

    if (!response.ok) {
      const errorMessage = await data.message
      throw new Error(errorMessage)
    }
    return data
  } catch(error) {
    console.error(error)
    return { error }
  }
}

export default fetchAPI
