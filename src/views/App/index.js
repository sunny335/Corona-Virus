import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Button } from 'reactstrap';
import 'src/assets/scss/style.scss';
import { useSelector } from 'react-redux';

import Fallback from 'src/components/Fallback';
import NotFound from 'src/components/404';
import withTitle from 'src/components/TitleComponent';
import Navbar from 'src/components/Header/Navbar/Navbar';
import Appointment from '../Appointment';
import Dashboard from '../Dashboard';
import SearcByArea from '../SearchByArea';
import DoctorDetails from '../DoctorDetails';
import ContactUs from '../ContactUs';
import Heading from 'src/components/Heading';
const Login = lazy(() => import('../Login'));
const SignUp = lazy(() => import('../SignUp'));

// Pages
const Docs = lazy(() => import('../Documentation'));
const Home = lazy(() => import('../Home'));

const App = () => {
  document.body.setAttribute('data-theme', 'dark');
  const data = useSelector((store) => store.loginInfo);
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <Router>
          <Heading />
          <Navbar />
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
            <Route
              exact
              path="/appointment"
              render={(props) =>
                withTitle({
                  component: Appointment,
                  title: 'Welcome',
                  ...props,
                })
              }
            />
            <Route
              exact
              path="/details/:id"
              render={(props) =>
                withTitle({
                  component: DoctorDetails,
                  title: 'Welcome',
                  ...props,
                })
              }
            />
            <Route
              path="/areasearch"
              render={(props) =>
                withTitle({
                  component: SearcByArea,
                  title: 'areasearch',
                  ...props,
                })
              }
            />
            <Route
              path="/dashboard"
              render={(props) =>
                withTitle({
                  component: Dashboard,
                  title: 'Welcome',
                  ...props,
                })
              }
            />
            <Route
              path="/contact"
              render={(props) =>
                withTitle({
                  component: ContactUs,
                  title: 'signup',
                  ...props,
                })
              }
            />

            {data.length < 1 ? (
              <Route
                path="/login"
                render={(props) =>
                  withTitle({
                    component: Login,
                    title: 'login',
                    ...props,
                  })
                }
              />
            ) : (
              <Redirect from="/login" to="/" />
            )}

            <Route
              path="/signup"
              render={(props) =>
                withTitle({
                  component: SignUp,
                  title: 'signup',
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
