import { postFetch } from "../lib/fetch";

export function postUserData(userData) {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL
    const myHeaders = {"Content-Type": "application/json"}

    return postFetch(userData, 'POST', myHeaders, `${apiBaseUrl}/user`)
}
        

            
        