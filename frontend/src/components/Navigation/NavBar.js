import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { BiHomeHeart } from 'react-icons/bi'
import { BiListCheck } from 'react-icons/bi'
import { BsPeopleFill } from 'react-icons/bs'
import { IoExitOutline } from 'react-icons/io5'

export default function Navigation() {
  return (
    <NavStyled>
      <NavLinkStyled to="/home" activeClassName="selected">
        <BiHomeHeart size="40px" />
      </NavLinkStyled>

      <NavLinkStyled to="/checklist" activeClassName="selected">
        <BiListCheck size="40px" />
      </NavLinkStyled>

      <NavLinkStyled to="#">
        <BsPeopleFill fill="#c4c4c4" size="40px" />
      </NavLinkStyled>

      <NavLinkStyled to="/ohhhrevoir">
        <IoExitOutline color="#c4c4c4" size="40px" />
      </NavLinkStyled>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 0.6em 2em;
  justify-content: space-between;
  background-color: #fcfcfc;
  box-shadow: 4px 4px 18px hsla(0, 0%, 0%, 0.3);
  z-index: 10;
`

const NavLinkStyled = styled(NavLink).attrs((props) => props.activeClassName)`
  svg {
    padding: 0.3em;
    border-radius: 40%;
    background: linear-gradient(145deg, #e3e3e3, #ffffff);
    box-shadow: 8px 8px 16px #ededed, -8px -8px 16px #ffffff;
    fill: #c4c4c4;
  }

  &.${(props) => props.activeClassName} > svg {
    fill: var(--ohhh-blue);
  }
`
