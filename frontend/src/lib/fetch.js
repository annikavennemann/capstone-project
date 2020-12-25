import saveLocally from './saveLocally'

export function postFetch(data, method, myHeaders, url) {
  const raw = JSON.stringify(data)
  const requestOptions = {
    method: method,
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  try {
    return fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => saveLocally('authenticationToken', result))
  } catch (error) {
    return { error: 'Server does not answer!' }
  }
}
