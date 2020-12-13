import loadLocally from '../lib/loadLocally';

const baseUrl = 'http:///onboarding.local/checklist'

export async function getChecklist() {
    
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
    const response = await fetch(baseUrl, requestOptions)
    const data = await response.json()
    return await data
  } catch (error) {
    return { error: 'The server is down! :(' }
  }
  
}