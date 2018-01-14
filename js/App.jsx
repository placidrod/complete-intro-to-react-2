// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import FlowConfigDoc from './FlowConfigDoc';
import FourOhFour from './404';
import preload from '../data.json';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => {
            const selectedShow: Show = preload.shows.find(show => props.match.params.id === show.imdbID);
            return <Details show={selectedShow} {...props} />;
          }}
        />
        <Route path="/flow" component={FlowConfigDoc} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
