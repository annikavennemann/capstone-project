
import loadLocally from '../../lib/loadLocally'
import ReactPlayer from 'react-player'
import styled from 'styled-components/macro'
import welcomePageHeader from '../../images/welcomePageHeader.svg'
import nextIcon from '../../images/nextIcon.svg'
import infoIcon from '../../images/info.svg'
import valueAmbitious from '../../images/valueAmbitious.png'
import valueRespect from '../../images/valueRespect.png'
import valueDiverse from '../../images/valueDiverse.png'
import valueVisonary from '../../images/valueVisonary.png'
import mailIcon from '../../images/mailIcon.svg'
import phoneIcon from '../../images/phoneIcon.svg'
import checklistIconLight from '../../images/checklistIconLight.svg'
import { useEffect, useState } from 'react'
import Navigation from '../Navigation/Navigation'

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
        <Wrapper>
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
            
            <h3>Who we aspire to be</h3>
            <Vision>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum.</li>
                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </Vision>
            

            <h3>Our core values</h3>
            </Wrapper>
            <ValueWrapper>
                <img src={valueAmbitious} alt="meeting of young people in a wooden conference room"/>
                <img src={valueRespect} alt="colorful bus on christopher street day"/>
                <img src={valueDiverse} alt="colorfully branded faq you book and mate mate"/>
                <img src={valueVisonary} alt="two people at a podium discussion"/>

            </ValueWrapper>
            <Wrapper>
                <div>
                    <BlueHeadline>Our way of working</BlueHeadline>
                    <WayOfWorking>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </WayOfWorking>
                </div>

                <BoxNext>
                    <h3>Ohhh, what's next?</h3>
                    <p>To give you an overview of upcoming tasks, we prepared a personal checklist for you.</p>
                    <img src={checklistIconLight} alt=""/>
                </BoxNext>

                
                    <p>If you have any doubts or questions, just let us know</p>
                    <ContactWrapper>
                        <a href="mailto:annika.vennemann@youth-against-aids.org">
                            <img src={mailIcon} alt="" />
                        </a>
                        <a href="tel:0049-173-3975041">
                            <img src={phoneIcon} alt="" />
                        </a>
                    </ContactWrapper>
            </Wrapper>
            <Navigation />
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

const Wrapper = styled.div`
    margin: 0.5em 2em;
    
    p {
        text-align: center;
        font-size: 20px;
    }
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

const ValueWrapper = styled.div`
    margin: 0 0 0 -0.5em;
    padding: 0;
    display: flex;
    height: 7em;
    width: auto;
    overflow-x: auto;
    white-space: nowrap;

    img {
        height: 7em;
        width: 7em;
        margin: 0 0.5em;
        border-radius: 35px;
    }
`

const BlueHeadline = styled.h3`
    color: #029FE3;
    font-size: 24px;
`

const WayOfWorking = styled.ul`

    li {
        font-size: 20px;
    }
`

const BoxNext = styled.div`
    margin: 2em 0;
    padding: 0.5em 0 0.7em;
    box-shadow: 4px 4px 18px #00000029;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    h3 {
        margin: 0;
        padding: 0.25em;
    }

    p {
        margin: 0;
        text-align: center;
        font-size: 20px;
    }

    img {
        padding: 0.5em 0.5em 0 0;
        align-self: flex-end;
    }
`

const ContactWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5em;

    img {
        margin: 0.5em;
        height: 1em;
        width: auto;
        color: #DBDBDB;
    }
`