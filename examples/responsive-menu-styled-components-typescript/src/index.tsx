import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './assets/styles/global-style'
import { ThemeProvider } from 'styled-components'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { media } from './assets/styles/media'

const projectTheme: ThemeProps = {
  theme: {
    primary: '#202020',
    secondary: '#393939'
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider
      theme={{
        ...projectTheme.theme,
        ...media
      }}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
