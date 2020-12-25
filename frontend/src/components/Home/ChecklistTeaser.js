import styled from 'styled-components/macro'

export default function ChecklistTeaser() {
    return (
        <BoxNext>
          <h3>Ohhh, what's next?</h3>
          <p>
            To give you an overview of upcoming tasks, we prepared a personal
            checklist for you.
          </p>
        </BoxNext>
    )
}

const BoxNext = styled.div`
  margin: 2em 0;
  padding: 1em;
  background: linear-gradient(145deg, #f2f2f2, #ffffff);
  box-shadow: 8px 8px 16px #ededed, -8px -8px 16px #ffffff;
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
    font-size: 1em;
  }
`