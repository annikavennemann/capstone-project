import loadLocally from '../lib/loadLocally';

const baseUrl = 'http:///onboarding.local/checklist'

export async function updateChecklist(checklist, id) {
    
    const myHeaders = new Headers()
    const token = loadLocally("authenticationToken");
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Authorization', 'Bearer ' + token.value)

    const raw = JSON.stringify(checklist)
    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    }
    try {
        const response = await fetch(`${baseUrl}/${id}`, requestOptions)
        const data = response.json()
        return data
    } catch (error) {
        return { error: 'The server is down :(' }
    }
}