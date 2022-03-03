import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <>
      <Router>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </Router>
    </>
  );
}

export default App;