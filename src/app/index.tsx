import React from 'react'
import ThemeProvider from '@fluent-ui/core/ThemeProvider'
import App from './App'

function Main(): React.ReactElement {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

export default Main
