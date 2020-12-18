import OhhhRevoir from '../../images/OhhhRevoir.png'
import styled from 'styled-components/macro'

export default function Logout() {
    return (
        <Background>
            <Wrapper>
                <img src={OhhhRevoir} alt=""/>
                <p>revoir et merci!<br/><br/>see you soon!</p>
            </Wrapper>
        </Background>
    )
}

const Background = styled.div`
    background-color: var(--ohhh-pink);
    width: 100%;
    height: 100%;
    padding: 10em 0 13em 0;
`


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4em;

    img {
        width: 100%;
        height: auto;
    }

    p {
        margin: 0;
        padding: 0 2em;
        text-transform: uppercase;
        color: black;
    }
`