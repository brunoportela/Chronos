import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Main from './components/pages/Main';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

import './stylesheets/index.scss';
import './stylesheets/App.scss'

const App = () => {
  return (
    <div className="container">

      <Nav />
      <div className="routes">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
