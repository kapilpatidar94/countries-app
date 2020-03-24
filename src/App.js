import React, {Fragment, lazy} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from 'components/Header'
import Loading from 'components/Loading'

const CountryPage = lazy(() => import('pages/CountryPage'))
const CountryDetailsPage = lazy(() => import('pages/CountryDetailsPage'))

const App = () => (
  <Fragment>
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
  </Fragment>
)

export default App
