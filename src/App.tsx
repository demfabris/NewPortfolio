import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header } from './components'

import * as pages from './pages'

import './assets'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <pages.Main />
      </Route>
    </Router>
  )
}

export default App
