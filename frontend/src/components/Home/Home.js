
import loadLocally from '../../lib/loadLocally'
import ReactPlayer from 'react-player'
import styled from 'styled-components/macro'
import welcomePageHeader from '../../images/welcomePageHeader.svg'
import nextIcon from '../../images/nextIcon.svg'
import infoIcon from '../../images/info.svg'
import { useEffect, useState } from 'react'

export default function Home() {
    
    const [userData, setUserData] = useState([])
    let userName = ''

    function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
       }
  
    async function waiting() {
        await sleep(3000);
        setUserData(loadLocally("authenticationToken"))
       }
       
       useEffect(() => {
           waiting();
        })
        
        try {
            userName = userData.userName
          } 
           catch (error) {
             console.log('still loading')
             userName = "... "
          }

    return (
        <>
        <Header>
            <HeaderImg src={welcomePageHeader} alt="Welcome to Ohhh!" />
        </Header>
        <Main>
            <Headline>Hi <span>{userName}!</span></Headline>

            <WelcomeBox>
                <p>Welcome to Ohhh - it's nice to have you with us!</p>
                <img src={nextIcon} alt=""/>
            </WelcomeBox>

            <InfoBox>
                <img src={infoIcon} alt=""/>
                <p>What is Ohhhboarding?</p>
            </InfoBox>

                <ReactPlayer 
                    url='https://www.youtube.com/watch?v=BHYr395khcs' 
                    width='100%'
                    height='auto'
                    box-shadow='4px 4px 18px #00000029'
                />
            <div>
                <h3>Who we aspire to be</h3>
                <Vision>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </Vision>
            </div>

            <h3>Our core values</h3>

            <div>
                <BlueHeadline>Our way of working</BlueHeadline>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </div>

        </Main>

        </>
    )
}

const Header = styled.header`
    margin: 0;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(208,208,208,1) 100%);
`

const HeaderImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 1em;
`

const Main = styled.main`
    margin: 0.5em 2em;
`

const Headline = styled.h2`
    margin: 0 0.3em;
    font-size: 32px;
    font-weight: lighter;
    color: #F5BAC4;

    span{
        font-family: Yellowtail;
        font-size: 32px;
        font-weight: 300;
        color: #707070
    }  
`

const WelcomeBox = styled.div`
    margin: 1em 0 0 0;
    padding: 1.5em 2em;
    box-shadow: 4px 4px 18px #00000029;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    p {
        text-align: center;
        font-size: 20px;
    }

    img {
        align-self: flex-end;
    }
`

const InfoBox = styled.div`
    display: flex;
    justify-content: center;
    font-size: 0.8em;
    color: #029FE3;

    img {
        padding-right: 0.6em;
    }
`
const Vision = styled.ul`
    list-style-image: url("../../images/bulletpoint.svg");

    li {
        font-size: 20px;
    }
`

const BlueHeadline = styled.h3`
    color: #029FE3;
`
