import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeView from './views/Home.view';
import CsgoView from './views/Csgo.view';

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" exact component={HomeView} />
              <Route path="/csgo" component={CsgoView} />
          </Switch>
      </Router>
  );
}

export default App;
