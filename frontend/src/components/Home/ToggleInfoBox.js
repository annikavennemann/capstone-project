import styled from 'styled-components/macro'

export default function ToggleInfoBox({
  defaultText,
  activeText,
  isActive,
  onClick,
}) {
  return (
    <InfoBox>
      <button onClick={onClick}>{isActive ? activeText : defaultText}</button>
    </InfoBox>
  )
}

const InfoBox = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 2em;
    border: none;
    background-color: transparent;
    text-align: justify;
    font-size: 14px;
    color: #029fe3;
  }
`
