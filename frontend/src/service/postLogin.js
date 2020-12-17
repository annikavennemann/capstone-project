import saveLocally from "../lib/saveLocally";

export async function postLogin(loginData) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify(loginData);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    };

    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL

    fetch(`${apiBaseUrl}/login`, requestOptions)
        .then((response) => response.text())
        .then(result => saveLocally("authenticationToken", result))
        .catch((error) => console.log('error', error));
}