import { createGlobalStyle } from 'styled-components'
import { colors } from '../theme'

/**
 * Global styles
 */
export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  ul {
    list-style-type: none;
  }

  .error {
    font-size: 14px;
    color: ${colors.red};
    margin-top: 2px;
    margin-left: 2px;
    font-weight: 400;
  }
`
