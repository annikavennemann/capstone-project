import styled from 'styled-components/macro'
import mailIcon from '../../images/mailIcon.svg'
import phoneIcon from '../../images/phoneIcon.svg'

export default function Contact() {
    return (
        <>
        <p>If you have any doubts or questions, just let us know</p>
        <Wrapper>
            <a href="mailto:annika.vennemann@youth-against-aids.org">
                <img src={mailIcon} alt="" />
            </a>
            <a href="tel:0049-173-3975041">
                <img src={phoneIcon} alt="" />
            </a>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
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