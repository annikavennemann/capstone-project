
import loadLocally from '../../lib/loadLocally'
import styled from 'styled-components/macro'

export default function Home() {
    const user = loadLocally("authenticationToken")
    const userName = user.userName
    
    return (
        <>
        <header></header>
        <main>
            <Headline>Hi <span>{userName}</span></Headline>

            <div>
                <p>Welcome to Ohhh - it's nice to have you with us!</p>
            </div>
            <div>
                <p>What is Ohhhboarding?</p>
            </div>
        </main>

        </>
    )
}

const Headline = styled.h2`
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
