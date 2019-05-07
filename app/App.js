import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import PageNotFound from './views/PageNotFound';

const App = () => (
  <div className="App">
    <Helmet titleTemplate="%s - Trivia App" defaultTitle="Trivia App">
      <meta name="description" content="Trivia Game Coding Challenge" />
    </Helmet>
    <BrowserRouter>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
