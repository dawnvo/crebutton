import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../lib/routes';
import { Layout } from '../pages';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          {routes.map(({ path, content, exact }) => (
            <Route
              exact={exact}
              path={path}
              component={content}
              key={`content-${path}`}
            />
          ))}
        </Switch>
      </Router>
    </Layout>
  );
}

export default hot(module)(App);