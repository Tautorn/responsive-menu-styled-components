import { createGlobalStyle } from 'styled-components'
import MarvelBackground from '../images/marvel.jpg'

const globalStyle = createGlobalStyle`

  * {
   padding: 0;
   margin: 0; 
  }

  body { 
    padding: 0;
    margin: 0;
    background: url(${MarvelBackground});
    height: 100%;
    width: 100%;
  }
`

export default globalStyle

