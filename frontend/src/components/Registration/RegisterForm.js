import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import signUpHeader from '../../images/signUpHeader.svg'
import signUpButton from '../../images/signUpButton.svg'
import { postUserData } from '../../service/postUserData'

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function RegisterForm({ onSubmit }) {
  const history = useHistory()
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    startdate: '',
  })

  const validInputs = {
    firstname: validateIsFilledOut(userData.firstname),
    lastname: validateIsFilledOut(userData.lastname),
    email: validateIsFilledOut(userData.email),
    password: validateIsFilledOut(userData.password),
    startdatw: validateIsFilledOut(userData.startdate),
  }

  const [faltyInputs, setFaultyInputs] = useState({
    firstname: false,
    lastname: false,
    email: false,
    password: false,
    startdate: false,
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
          id="email"
          placeholder="Email"
          onChange={onChange}
          value={userData.email}
          onBlur={() =>
            setFaultyInputs({
              ...faltyInputs,
              email: true,
            })
          }
        />
        {faltyInputs.email && !validInputs.email && (
          <span>*Please enter your @ohhh.org mail-address.</span>
        )}

        <label htmlFor="firstname" id="firstname" />
        <input
          type="text"
          name="firstname"
          placeholder="First name"
          onChange={onChange}
          value={userData.firstname}
          onBlur={() =>
            setFaultyInputs({
              ...faltyInputs,
              firstname: true,
            })
          }
        />
        {faltyInputs.firstname && !validInputs.firstname && (
          <span>*Please enter your first name.</span>
        )}

        <label htmlFor="lastname" />
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          onChange={onChange}
          value={userData.lastname}
          onBlur={() =>
            setFaultyInputs({
              ...faltyInputs,
              lastname: true,
            })
          }
        />
        {faltyInputs.lastname && !validInputs.lastname && (
          <span>*Please enter your last name.</span>
        )}

        <label htmlFor="password" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={userData.password}
          onBlur={() =>
            setFaultyInputs({
              ...faltyInputs,
              password: true,
            })
          }
        />
        {faltyInputs.password && !validInputs.password && (
          <span>*Please enter your password.</span>
        )}

        <Startdate htmlFor="startdate">
          Start date
          <input
            type="date"
            name="startdate"
            min="2021-01-01"
            max="2021-12-31"
            onChange={onChange}
            value={userData.startdate}
            onBlur={() =>
              setFaultyInputs({
                ...faltyInputs,
                startdate: true,
              })
            }
          />
        </Startdate>

        <SignUpWrapper>
          <p>Sign up</p>
          <button onClick={registerUser}>
            <img src={signUpButton} alt="" />
          </button>
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
      [event.target.name]: event.target.value,
    })
  }

  function registerUser(event) {
    event.preventDefault()

    if (validRegistration(userData)) {
      trimInputs(userData)
      onSubmit(userData)
      setUserData({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        startdate: '',
      })

      setFaultyInputs({
        firstname: false,
        lastname: false,
        email: false,
        password: false,
        startdate: false,
      })

      postUserData(userData)

      history.push('/')
    } else {
      alert('Please check your form details.')
    }
  }

  function trimInputs() {
    setUserData({
      ...userData,
      firstname: userData.firstname.trim(),
      lastname: userData.lastname.trim(),
      email: userData.email.trim(),
      password: userData.password.trim(),
    })
  }

  function validateIsFilledOut(input) {
    return input?.trim() !== ''
  }
}

const validateName = ({ firstname, lastname }) =>
  firstname.length >= 2 && lastname.length >= 2

const validateEmail = ({ email }) => email.includes('@ohhh.org')

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
    border-bottom: 1px solid #d3d3d3;
  }

  input::placeholder {
    font-size: 1.2em;
    color: #d3d3d3;
  }

  span {
    font-size: 0.7em;
    color: #029fe3;
  }
`

const Startdate = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0.5em 0;
  border-bottom: 1px solid #d3d3d3;
  font-size: 1em;
  color: #d3d3d3;

  input[type='date'] {
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
    color: #029fe3;
    font-size: 0.9em;
  }
`
