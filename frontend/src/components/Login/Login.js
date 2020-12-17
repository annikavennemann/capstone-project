import { useState } from 'react'
import { useHistory } from "react-router-dom"
import saveLocally from '../../lib/saveLocally'
import styled from 'styled-components/macro'
import signInHeader from '../../images/signInHeader.svg'
import signInButton from '../../images/signInButton.svg'
import OhhhLogo from '../../images/OhhhFoundation.png'

export default function Login() {
    const [loginData, setLoginData] = useState({
      email: '',
      password: ''
    })
    
    const history = useHistory();

    return (
        <>
          <header>
              <HeaderImg src={signInHeader} alt="Ohhh hi! Great day!" />
          </header>
          <FormStyled action="/home">
            <label htmlFor="email" />
            <input 
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChange}
              value={loginData.email}
            />

            <label htmlFor="password" />
            <input 
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              value={loginData.password}
            />
            <SignInWrapper>
              <p>Sign in</p>
              <button onClick={loginUser}><img src={signInButton} alt=""/></button>
            </SignInWrapper>
            
          <OhhhImg src={OhhhLogo} alt=""/>
          </FormStyled>


          <FooterStyled>
                <p>Havn't an account yet?</p>
                <a href="/create-account">Sign up.</a>
          </FooterStyled>
        </>
      );

      function onChange(event) {
        setLoginData({
          ...loginData,
          [event.target.name]: event.target.value
        })
      }

      function loginUser(event) {
        event.preventDefault();
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

        // @TODO: if password isnt valid -> send User info
        history.push("/home")
      }
}



const HeaderImg = styled.img`
  display: block;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
`

const FormStyled = styled.form`
  margin: 2em;
  padding: 4.5em 2em 0;
  box-shadow: 4px 4px 18px hsla(0, 0%, 0%, 0.3);
  border-radius: 20px;

  input {
    width: 100%;
    margin-bottom: 2em;
    padding: 0.7em 0;
    border: 0;
    border-bottom: 1px solid #D3D3D3;
  }

  input::placeholder {
    font-size: 1.2em;
    color: #D3D3D3;
  }
`

const SignInWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.9em;
    margin: 0;
  }

  button {
    background-color: transparent;
    border: none;
  }
`

const OhhhImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  padding: 2em 0;
  background-color: transparent;
  width: 6em;
  height: auto;
  display: block;
`

const FooterStyled = styled.footer`
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 1em;
    width: 100%;
  
  p {
    margin: 0;
    padding-right: 0.5em;
    font-size: 0.9em;
  }

  a {
    text-decoration: none;
    color: #029FE3;
    font-size: 0.9em;
  }
`