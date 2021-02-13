import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import 'src/assets/scss/style.scss';

import Fallback from 'src/components/Fallback';
import NotFound from 'src/components/404';
import withTitle from 'src/components/TitleComponent';

// Pages
const Docs = lazy(() => import('../Documentation'));
const Home = lazy(() => import('../Home'));

const App = () => {
  document.body.setAttribute('data-theme', 'dark');
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <Router>
          <Switch>
            {/* Page routes */}
            <Route
              exact
              path="/"
              render={(props) =>
                withTitle({
                  component: Home,
                  title: 'Welcome',
                  ...props,
                })
              }
            />

            {/* Doc Page */}
            <Route
              path="/docs"
              render={(props) =>
                withTitle({
                  component: Docs,
                  title: 'Docs',
                  ...props,
                })
              }
            />

            {/* Default 404 */}
            <Route
              render={(props) =>
                withTitle({
                  component: NotFound,
                  title: '404 Error',
                  ...props,
                })
              }
            />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
