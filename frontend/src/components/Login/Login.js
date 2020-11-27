import saveLocally from '../../lib/saveLocally';

export default function Login() {

    return (
        <div className="App">
          <button onClick={loginUser}>Login</button>
        </div>
      );

      function loginUser(event) {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
    
        var raw = JSON.stringify({
            email: "annivenne@ohhh.org",
            password: "hello"
        });
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };
    
        fetch('http://onboarding.local/login', requestOptions)
            .then((response) => response.json())
            .then(result => saveLocally("authenticationToken", result.token))
            .catch((error) => console.log('error', error));
      }
}