import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { HomePage, AboutPage, ContactPage, RentalsPage, ErrorPage } from './pages'

function App() {
 return (
  <Router>
   <Navbar />
   <Switch>
    <Route exact path="/">
     <HomePage />
    </Route>
    
    <Route exact path="/about">
     <AboutPage />
    </Route>
    <Route exact path="/contact">
     <ContactPage />
    </Route>
    <Route exact path="/rentals">
     <RentalsPage />
    </Route>
    <Route exact path="/"></Route>
    <Route exact path="/*">
     <ErrorPage />
    </Route>
   </Switch>
   <Footer />
  </Router>
 )
}

export default App
