import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import navHome from '../../images/navHome.svg'
import navChecklist from '../../images/navChecklist.svg'
import navConnect from '../../images/navConnect.svg'
import navProfile from '../../images/navProfile.svg'

export default function Navigation() {
    return (
        <NavStyled>
            <NavLinkStyled to="/home">
                <img src={navHome} alt=""/>
            </NavLinkStyled>

            <NavLinkStyled to="/checklist">
                <img src={navChecklist} alt=""/>
            </NavLinkStyled>
            
            <img src={navConnect} alt=""/>
            <img src={navProfile} alt=""/>

        </NavStyled>
    )
}

const NavStyled = styled.nav`
    position: fixed;
    bottom: 2em;
    width: 95%;
    height: 2.5em;
    display: flex;
    margin-left: 2.5%;
    padding: 0.5em 2em;
    justify-content: space-between;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 18px #00000029;
    border-radius: 10px;
    z-index: 100;
`
const NavLinkStyled = styled(NavLink)`
    img {
            height: 1.5em;
            width: auto;
        }
`