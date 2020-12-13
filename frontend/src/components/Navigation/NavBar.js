import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { BiHomeHeart } from "react-icons/bi";
import { BiListCheck } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";


export default function Navigation() {
    return (
        <NavStyled>
            <NavLinkStyled to="/home">
                <div>
                    <BiHomeHeart color='#c4c4c4' size='30px'/>
                </div>
            </NavLinkStyled>

            <NavLinkStyled to="/checklist">
                <div>
                    <ChecklistIcon color='#c4c4c4' size='30px'/>
                </div>
            </NavLinkStyled>
            
            <div>
                <BsPeopleFill color='#c4c4c4' size='30px'/>
            </div>

            <div>
                <IoPersonCircleOutline color='#c4c4c4' size='30px'/>
            </div>
            

        </NavStyled>
    )
}

const NavStyled = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    margin-left: 0;
    padding: 0.5em 2em;
    justify-content: space-between;
    background-color: #fcfcfc;
    box-shadow: 4px 4px 18px hsla(0, 0%, 0%, 0.3);
    border-radius: 10px;
    z-index: 10;

    div {
        width: 2.5em;
        height: 2.5em;
        border-radius: 40%;
        background: linear-gradient(145deg, #e3e3e3, #ffffff);
        box-shadow:  8px 8px 16px #ededed, -8px -8px 16px #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const NavLinkStyled = styled(NavLink)`
    &.active {
        BiListCheck {
            
        }
    }
`
const ChecklistIcon = styled(BiListCheck)`
    color: c4c4c4;

    &.active {
        color: var(--ohhh-pink);
    }

`