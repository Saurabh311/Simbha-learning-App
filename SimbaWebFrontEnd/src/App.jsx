import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import custom styles for our application
import './css/App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Import pages
import HomePage from './components/home/HomePage';

function App() {

  const loggedInRouter = (
    <Router>
      <Navbar />

      <div className="container mt-5">
        
        <Switch>

          <Route path="/">
            <HomePage />
          </Route>

          <Route exact path="/login" render={() => (window.location = "https://google.com")} />

        </Switch>
      
      </div>

      <Footer />

    </Router>
  );

  return loggedInRouter;
}

export default App;
