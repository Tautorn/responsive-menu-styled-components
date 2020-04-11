import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './assets/styles/global-style'
import { ThemeProvider } from 'styled-components'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { media } from './assets/styles/media'

const theme = {
  primary: '#202020',
  secondary: '#393939'
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider
      theme={{
        ...theme,
        ...media
      }}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
