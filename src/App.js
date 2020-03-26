import React, {Fragment, lazy} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from 'components/Header'
import Loading from 'components/Loading'
import {Box, Heading, Grid} from '@chakra-ui/core'

import "./app.css"

const CountryPage = lazy(() => import('pages/CountryPage'))
const CountryDetailsPage = lazy(() => import('pages/CountryDetailsPage'))

const App = () => (
  
  <Fragment>
    <Box id="light1">
    <Header />
    <main>
      <Loading>
        <Switch>
          <Route path="/details/:countryCode">
            <CountryDetailsPage />
          </Route>
          <Route path="/">
            <CountryPage />
          </Route>
        </Switch>
      </Loading>
    </main>
    </Box>

  </Fragment>
)

export default App
