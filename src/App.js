import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import ListaID_Nome from './Pages/ListaID_Nome/ListaID_Nome';
import ListaTodos from './Pages/ListaTodos/ListaTodos';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/home'>
            <LandingPage />
          </Route>
          <Route path='/lista-todos'>
            <ListaTodos />
          </Route>
          <Route path='/lista-id-nome'>
            <ListaID_Nome />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;