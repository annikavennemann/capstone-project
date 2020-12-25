import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from '../Navigation/NavBar'
import ChecklistTeaser from './ChecklistTeaser'
import Contact from './Contact'
import CoreValues from './CoreValues'
import OhhhVideo from './OhhhVideo'
import PersonalGreeting from './PersonalGreeting'
import ToggleInfoBox from './ToggleInfoBox'
import Vision from './Vision'
import WayOfWorking from './WayOfWorking'
import WelcomeBox from './WelcomeBox'

export default function Home() {
  const [isInfoShown, setIsInfoShown] = useState(false)

  return (
    <>
      <PersonalGreeting />
      <Wrapper>
        <WelcomeBox />
        <ToggleInfoBox
          defaultText="&#9432; What is Ohhhboarding?"
          activeText="Ohhhboarding should help you to get to know us and our vision a bit better. At the same time, it gives you an overview of the upcoming tasks for the next few weeks, so that your start with us will be fantastic. &#x2B06; "
          isActive={isInfoShown}
          onClick={() => setIsInfoShown(!isInfoShown)}
        />
        <OhhhVideo />
        <Vision />
        <h3>Our core values</h3>
      </Wrapper>
      <CoreValues />
      <Wrapper>
        <WayOfWorking />
        <ChecklistTeaser />
        <Contact />
      </Wrapper>
      <Navigation />
    </>
  )
}

const Wrapper = styled.div`
  margin: 0 2em 0.5em 2em;
  background-color: white;

  p {
    text-align: center;
    font-size: 20px;
  }
`
