import styled from 'styled-components/macro'
import valueAmbitious from '../../images/values/valueAmbitious.png'
import valueRespect from '../../images/values/valueRespect.png'
import valueDiverse from '../../images/values/valueDiverse.png'
import valueVisonary from '../../images/values/valueVisonary.png'

export default function CoreValues() {
  return (
    <ValueWrapper>
      <img
        src={valueAmbitious}
        alt="meeting of young people in a wooden conference room"
      />
      <img src={valueRespect} alt="colorful bus on christopher street day" />
      <img
        src={valueDiverse}
        alt="colorfully branded faq you book and mate mate"
      />
      <img src={valueVisonary} alt="two people at a podium discussion" />
    </ValueWrapper>
  )
}

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
