import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeProvider, CSSReset} from '@chakra-ui/core'
import App from 'App'

render(
  <Router>
    <ThemeProvider>
      <CSSReset />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
)
