import loadLocally from '../lib/loadLocally';

export async function getChecklist() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL
    
  const myHeaders = new Headers()
  const token = loadLocally("authenticationToken");
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('Authorization', 'Bearer ' + token.value)

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  try {
    const response = await fetch(`${apiBaseUrl}/checklist`, requestOptions)
    const data = await response.json()
    return await data
  } catch (error) {
    return { error: 'The server is down! :(' }
  }
}