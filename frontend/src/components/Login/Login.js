import { useState } from 'react'
import saveLocally from '../../lib/saveLocally';

export default function Login() {
    const [loginData, setLoginData] = useState({
      email: '',
      password: ''
    })

    return (
        <form>
          <label htmlFor="email">
            Email
            <input 
              type="email"
              name="email"
              placeholder="...@ohhh.org"
              onChange={onChange}
              value={loginData.email}
            />
          </label>

          <label htmlFor="password">
            Password
            <input 
              type="password"
              name="password"
              onChange={onChange}
              value={loginData.password}
            />
          </label>


          <button onClick={loginUser}>Login</button>
        </form>
      );

      function onChange(event) {
        setLoginData({
          ...loginData,
          [event.target.name]: event.target.value
        })
      }

      function loginUser(event) {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
    
        var raw = JSON.stringify(loginData);
    
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