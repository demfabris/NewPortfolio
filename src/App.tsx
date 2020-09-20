import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Footer, Header } from './components'

import * as pages from './pages'

import './assets'

const App: React.FC = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Route exact path="/">
          <pages.Main />
        </Route>
        <Route path="/code">
          <pages.Code />
        </Route>
        <Footer />
      </div>
    </Router>
  )
}

export default App
