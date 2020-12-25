import { useCallback, useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { RiArrowRightSLine } from 'react-icons/ri'
import { RiArrowDownSLine } from 'react-icons/ri'
import styled from 'styled-components/macro'
import OhhhLogo from '../../images/OhhhFoundation.png'

const pages = [
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'auto',
        margin: '1em 0 0 0',
        padding: '2em 1em 1em 1em',
        background: 'linear-gradient(145deg, #f2f2f2, #ffffff)',
        boxShadow: '8px 8px 16px #ededed, -8px -8px 16px #ffffff',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1em',
      }}
    >
      Welcome to
      <OhhhImg src={OhhhLogo} alt="" />
      It's nice to have you with us!
      <RiArrowRightSLine color="var(--ohhh-pink)" size="40px" />
    </animated.div>
  ),

  ({ style }) => (
    <animated.div
      style={{
        ...style,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'auto',
        margin: '1em 0 0 0',
        padding: '2em 1em 1em 1em',
        background: 'linear-gradient(145deg, #f2f2f2, #ffffff)',
        boxShadow: '8px 8px 16px #ededed, -8px -8px 16px #ffffff',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1em',
      }}
    >
      <br />
      We have developed this app especially for you, so that you have a great
      start into your new job.
      <br />
      <br />
      <RiArrowRightSLine color="var(--ohhh-pink)" size="40px" />
    </animated.div>
  ),

  ({ style }) => (
    <animated.div
      style={{
        ...style,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'auto',
        margin: '1em 0 0 0',
        padding: '2em 1em 1em 1em',
        background: 'linear-gradient(145deg, #f2f2f2, #ffffff)',
        boxShadow: '8px 8px 16px #ededed, -8px -8px 16px #ffffff',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1em',
      }}
    >
      <br />
      To give you an overview of where we come from & who we are as an
      organisation, we prepared a short video for you. <br />
      <br />
      Check it out:
      <br />
      <RiArrowDownSLine color="var(--ohhh-pink)" size="40px" />
    </animated.div>
  ),
]

export default function WelcomeBox() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set((state) => (state + 1) % 3), [])
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <Wrapper onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  align-items: center;
  will-change: transform, opacity;
  text-align: center;
  height: 270px;

  svg {
    margin-left: auto;
  }
`

const OhhhImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  width: 12em;
  height: auto;
  display: block;
`
