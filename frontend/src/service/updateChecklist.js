import loadLocally from '../lib/loadLocally'

export async function updateChecklist(checklist, userChecklistItemId) {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL

  const myHeaders = new Headers()
  const token = loadLocally('authenticationToken')
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('Authorization', 'Bearer ' + token.value)

  const raw = JSON.stringify(checklist) // hier muss new isChecked-value übergeben werden + Item-userChecklistItemId in URL
  const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }
  try {
    const response = await fetch(
      `${apiBaseUrl}/checklist/${userChecklistItemId}`,
      requestOptions
    )
    const data = response.json()
    return data
  } catch (error) {
    return { error: 'The server is down :(' }
  }
}
