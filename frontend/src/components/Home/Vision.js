import styled from 'styled-components/macro'

export default function Vision() {
  return (
    <>
      <h3>Who we aspire to be</h3>
      <List>
        <li>
          We create the future for a lifetime. <span>#extraohhhrdinary</span>
        </li>
        <li>We are always innovative and driven.</li>
        <li>
          Our work has a high level of social responsibility - we make a
          difference.
        </li>
        <li>We include everyone.</li>
        <li>
          Climate change is one of the greatest challenges of our time. As a
          sustainable company, we are making a contribution.
        </li>
      </List>
    </>
  )
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0 0 0 1em;

  li {
    font-size: 1em;
    list-style: none;
    position: relative;
    margin-bottom: 0.5em;
    padding-left: 30px;

    span {
      font-size: 0.8em;
      color: var(--ohhh-pink);
    }
  }

  li::before {
    content: '';
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
