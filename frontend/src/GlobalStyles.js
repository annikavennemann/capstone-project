import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding:0;
        font-family: Avenir;
        font-size: 17px;
        font-weight: lighter;
        color: #6A6A6A;
        background-color: #FCFCFC;
    }

    h3 {
        font-size: 24px;
        text-align: center;
        color: #F5BAC4;
    }

    :root {
        --ohhh-pink: #F5BAC4;
        --ohhh-blue: #029FE3;
    }
`


