import loadLocally from '../../lib/loadLocally'
import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'

export default function PersonalGreeting() {
  const [userData, setUserData] = useState([])
  let userName = ''

  function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  useEffect(() => {
    waiting()
  })

  async function waiting() {
    await sleep(1000)
    setUserData(loadLocally('authenticationToken'))
  }

  try {
    userName = userData.userName
  } catch (error) {
    console.log('still loading')
    userName = '... '
  }

  return (
    <Header>
      <h2>
        Hi <span>{userName}!</span>
      </h2>
    </Header>
  )
}

const Header = styled.header`
  margin: 0;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(186, 186, 186, 1) 100%
  );

  h2 {
    margin: 0 0.3em;
    padding: 0.7em 1em;
    font-size: 2.5em;
    font-weight: normal;
    color: black;

    span {
      font-family: Yellowtail;
      font-size: 42px;
      font-weight: 300;
      color: #707070;
    }
  }
`
