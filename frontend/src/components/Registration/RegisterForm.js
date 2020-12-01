import { useState } from 'react'
import styled from 'styled-components/macro'
import signUpHeader from '../../images/signUpHeader.svg'
import signUpButton from '../../images/signUpButton.svg'

export default function RegisterForm({ onSubmit }) {
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        startdate: '',
    })
    
    return (
        <>
            <header>
                <HeaderImg src={signUpHeader} alt="Welcome to Ohhhboarding!" />
            </header>
            <Form onSubmit={registerUser}>

            <label htmlFor="email" />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                    value={userData.email}
                />

                <label htmlFor="firstname" id="firstname"/>
                <input
                    type="text"
                    name="firstname"
                    placeholder="First name"
                    onChange={onChange}
                    value={userData.firstname}
                />

                <label htmlFor="lastname" />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    onChange={onChange}
                    value={userData.lastname}
                />

                <label htmlFor="password" />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={userData.password}
                />
                
                <Startdate htmlFor="startdate" >
                    Start date
                    <input
                        type="date"
                        name="startdate"
                        min="2021-01-01" max="2021-12-31"
                        onChange={onChange}
                        value={userData.startdate}
                    />
                </Startdate>
                
                <SignUpWrapper>
                    <p>Sign up</p>
                    <button onClick={registerUser}><img src={signUpButton} alt=""/></button>
                </SignUpWrapper>

            </Form>

            <Footer>
                <p>You already have an account yet?</p>
                <a href="/">Sign in.</a>
            </Footer>
        </>
    )

    function onChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    function registerUser(event) {
        event.preventDefault();

        if (validRegistration(userData)){
            onSubmit(userData)
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
        
            const raw = JSON.stringify(userData);
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow',
            }

            fetch('http://onboarding.local/user', requestOptions)
            .then((response) => response.text())
            .then(result => console.log(result))
            .catch((error) => console.log('error', error))
            // @TODO: error handling if something goes wrong
        } else {
            alert('Please check your form details.')
        }
    }
}

    const validateName = ({ firstname, lastname }) =>
        firstname.length >= 2 && lastname.length >= 2

    const validateEmail = ({ email }) =>
        email.includes('@ohhh.org')

    const validRegistration = (userData) =>
        validateName(userData) && validateEmail(userData)

const HeaderImg = styled.img`
  display: block;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
`

const Form = styled.form`
  margin: 2em;
  padding: 3em 2em 1em;
  box-shadow: 4px 4px 18px #00000029;
  border-radius: 20px;

  input {
    width: 100%;
    margin-bottom: 1em;
    padding: 0.7em 0;
    border: 0;
    border-bottom: 1px solid #D3D3D3;
  }

  input::placeholder {
    font-size: 1.2em;
    color: #D3D3D3;
  }
`

const Startdate = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0.5em 0;
    border-bottom: 1px solid #D3D3D3;
    font-size: 1em;
    color: #D3D3D3;

    input[type="date"] {
        margin: 0;
        padding: 0;
        width: 55%;
        border: 0;
    }
`

const SignUpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 0 0 0;

  p {
    font-size: 1.9em;
    margin: 0;
  }

  button {
    background-color: transparent;
    border: none;
  }
`

const Footer = styled.footer`
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