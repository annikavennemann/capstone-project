
import loadLocally from '../../lib/loadLocally'
import ReactPlayer from 'react-player'
import styled from 'styled-components/macro'
import welcomePageHeader from '../../images/welcomePageHeader.svg'
import valueAmbitious from '../../images/valueAmbitious.png'
import valueRespect from '../../images/valueRespect.png'
import valueDiverse from '../../images/valueDiverse.png'
import valueVisonary from '../../images/valueVisonary.png'
import mailIcon from '../../images/mailIcon.svg'
import phoneIcon from '../../images/phoneIcon.svg'
import { useEffect, useState } from 'react'
import Navigation from '../Navigation/NavBar'
import ToggleInfoBox from './ToggleInfoBox'
import WelcomeBox from './WelcomeBox'

export default function Home() {
    
    const [userData, setUserData] = useState([])
    let userName = ''

    const [isInfoShown, setIsInfoShown] = useState(false)

    function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
       }
  
    useEffect(() => {
        waiting();
    })

    async function waiting() {
        await sleep(1000);
        setUserData(loadLocally("authenticationToken"))
       }
        
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
            <img src={welcomePageHeader} alt="Welcome to Ohhh!" />
        </Header>
        <Wrapper>
            <Headline>Hi <span>{userName}!</span></Headline>

            <WelcomeBox />
            
            <ToggleInfoBox
                defaultText="&#9432; What is Ohhhboarding?"
                activeText="Ohhhboarding should help you to get to know us and our vision a bit better. At the same time, it gives you an overview of the upcoming tasks for the next few weeks, so that your start with us will be fantastic. &#x2B06; "
                isActive={isInfoShown}
                onClick={() => setIsInfoShown(!isInfoShown)}
            />

            <ReactPlayer 
                url='https://www.youtube.com/watch?v=JvJZOYTuzNA&feature=youtu.be' 
                width='100%'
                height='auto'
                box-shadow='4px 4px 18px hsla(0, 0%, 0%, 0.3)'
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
                        <li>customer-centered</li>
                        <li>agile</li>
                        <li>data-based</li>
                        <li>Together we can make a difference. <span>#strongertogether</span></li>
                    </WayOfWorking>
                </div>

                <BoxNext>
                    <h3>Ohhh, what's next?</h3>
                    <p>To give you an overview of upcoming tasks, we prepared a personal checklist for you.</p>
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
    
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding: 1em;
    }
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

const Vision = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    padding: 0 0 0 1em;

    li {
        font-size: 20px;
        list-style: none;
        position: relative;
        margin-bottom: 0.5em;
        padding-left: 30px;
    }

    li::before {
        content: "";
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16.97' height='17.4' viewBox='0 0 16.97 17.4'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23f5bac4;fill-rule:evenodd;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M67.9,44.637c-.21-.244-.185-.622-.311-.966a4.543,4.543,0,0,0-.386-.849,2.75,2.75,0,0,0-.731-.731c-.151-.1-.319-.126-.42-.269-.37-.5-.6-1.084-.966-1.58-.328-.445-.882-.563-1.386-.849a5.322,5.322,0,0,1-1.042-1.042c-.168-.168-.429-.277-.58-.462-.8-.067-.8.193-1.117.689-.084.134-.227.252-.311.386-.37-.05-.588-.8-.731-1.117-.05-.1-.176-.21-.227-.311-.395-.647-.6-1.353-1.462-1.538-.118.118-.3.193-.386.344s-.025.277-.076.462c-.319,1.227.235,2.445.269,3.5-.26-.076-.387-.429-.538-.613a8.144,8.144,0,0,0-1.58-1.462c-.2-.143-.765-.6-1.075-.462-.3,0-.319.092-.5.193-.42,1.117.269,2.084.269,3.31-.076.092-.151.176-.227.269-.639.336-1.655.193-2,.807a1.2,1.2,0,0,0,.151,1.075,8.627,8.627,0,0,0,1.924,1.58v.076c-.286.218-.739.294-1,.538-.067.067-.092.193-.151.269a.7.7,0,0,0,.042.344c.067.134.21.126.42.118a1.965,1.965,0,0,0,.538.689c.168.126.386.176.462.387.059.16-.244.462-.311.655a1.442,1.442,0,0,0,.227,1.151,4.6,4.6,0,0,0,1.193,1.042c.21.16.319.429.5.613a3.654,3.654,0,0,0,.689.462c.277.193.429.6.689.807a3.65,3.65,0,0,0,1.311.58,3.437,3.437,0,0,0,1.386.076,2.6,2.6,0,0,1,1.075-.118c.37.084.781.218,1.151.311h.731a7.574,7.574,0,0,0,2.269-.731,1.924,1.924,0,0,0,.538-1.151c.034-.16-.025-.353.042-.462.21-.151.739-.16,1-.344.386-.277.462-.857.731-1.269a8.67,8.67,0,0,0,1.193-1.731C69.62,46.15,68.351,45.167,67.9,44.637Zm-3.126,2.924a3.791,3.791,0,0,1-.748,1.252,3.546,3.546,0,0,1-1.159.832,3.731,3.731,0,0,1-1.5.3,3.594,3.594,0,0,1-1.5-.3,3.428,3.428,0,0,1-1.151-.832,3.791,3.791,0,0,1-.748-1.252,4.583,4.583,0,0,1-.26-1.58,4.311,4.311,0,0,1,.26-1.5,3.555,3.555,0,0,1,1.9-2.025,3.993,3.993,0,0,1,3.008,0,3.38,3.38,0,0,1,1.159.815,3.692,3.692,0,0,1,.748,1.21,4.124,4.124,0,0,1,.26,1.5,4.423,4.423,0,0,1-.26,1.58Z' transform='translate(-52.304 -36)'/%3E%3C/svg%3E");
        background-size: 1em 1em;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 1em;
        width: 1em;
        position: absolute;
        left: 1px;
  }
`

const ValueWrapper = styled.div`
    margin-right: -0.5em;
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    padding: 0 0 0 1em;

    li {
        font-size: 20px;
        list-style: none;
        position: relative;
        margin-bottom: 0.5em;
        padding-left: 30px;

        span {
            font-size: 0.8em;
            color: #029FE3;
        }
    }

    li::before {
        content: "";
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16.97' height='17.006' viewBox='0 0 16.97 17.006'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23029fe3;fill-rule:evenodd;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M67.9,44.637c-.21-.244-.185-.622-.311-.966a4.543,4.543,0,0,0-.386-.849,2.75,2.75,0,0,0-.731-.731c-.151-.1-.319-.126-.42-.269-.37-.5-.6-1.084-.966-1.58-.328-.445-.882-.563-1.386-.849a5.322,5.322,0,0,1-1.042-1.042c-.168-.168-.429-.277-.58-.462-.8-.067-.8.193-1.117.689-.084.134-.227.252-.311.386-.37-.05-.588-.8-.731-1.117-.05-.1-.176-.21-.227-.311-.395-.647-.6-1.353-1.462-1.538-.118.118-.3.193-.386.344s-.025.277-.076.462c-.319,1.227.235,2.445.269,3.5-.26-.076-.387-.429-.538-.613a8.144,8.144,0,0,0-1.58-1.462c-.2-.143-.765-.6-1.075-.462-.3,0-.319.092-.5.193-.42,1.117.269,2.084.269,3.31-.076.092-.151.176-.227.269-.639.336-1.655.193-2,.807a1.2,1.2,0,0,0,.151,1.075,8.627,8.627,0,0,0,1.924,1.58v.076c-.286.218-.739.294-1,.538-.067.067-.092.193-.151.269a.7.7,0,0,0,.042.344c.067.134.21.126.42.118a1.965,1.965,0,0,0,.538.689c.168.126.386.176.462.387.059.16-.244.462-.311.655a1.442,1.442,0,0,0,.227,1.151,4.6,4.6,0,0,0,1.193,1.042c.21.16.319.429.5.613a3.654,3.654,0,0,0,.689.462c.277.193.429.6.689.807a3.65,3.65,0,0,0,1.311.58,3.437,3.437,0,0,0,1.386.076,2.6,2.6,0,0,1,1.075-.118c.37.084.781.218,1.151.311h.731a7.574,7.574,0,0,0,2.269-.731,1.924,1.924,0,0,0,.538-1.151c.034-.16-.025-.353.042-.462.21-.151.739-.16,1-.344.386-.277.462-.857.731-1.269a8.67,8.67,0,0,0,1.193-1.731C69.62,46.15,68.351,45.167,67.9,44.637Zm-3.126,2.924a3.791,3.791,0,0,1-.748,1.252,3.546,3.546,0,0,1-1.159.832,3.731,3.731,0,0,1-1.5.3,3.594,3.594,0,0,1-1.5-.3,3.428,3.428,0,0,1-1.151-.832,3.791,3.791,0,0,1-.748-1.252,4.583,4.583,0,0,1-.26-1.58,4.311,4.311,0,0,1,.26-1.5,3.555,3.555,0,0,1,1.9-2.025,3.993,3.993,0,0,1,3.008,0,3.38,3.38,0,0,1,1.159.815,3.692,3.692,0,0,1,.748,1.21,4.124,4.124,0,0,1,.26,1.5,4.423,4.423,0,0,1-.26,1.58Z' transform='translate(-52.304 -36)'/%3E%3C/svg%3E");
        background-size: 1em 1em;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 1em;
        width: 1em;
        position: absolute;
        left: 1px;
  }
`

const BoxNext = styled.div`
    margin: 2em 0;
    padding: 0.5em 0 0.7em;
    background: linear-gradient(145deg, #f2f2f2, #ffffff);
    box-shadow:  8px 8px 16px #ededed, -8px -8px 16px #ffffff;
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