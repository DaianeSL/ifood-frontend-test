import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  div#__next, html, body {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.colors.background}
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, p, span, a {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`

export default GlobalStyles
