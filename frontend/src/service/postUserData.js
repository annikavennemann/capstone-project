import saveLocally from "../lib/saveLocally";

export async function postUserData(userData) {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL
      
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json');
  
    const raw = JSON.stringify(userData);
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    }
    
    fetch(`${apiBaseUrl}/user`, requestOptions)
        .then((response) => response.text())
        .then(result => console.log(result))
        .then(result => saveLocally("authenticationToken", result))
        .catch((error) => console.log('error', error))
}
        

            
        