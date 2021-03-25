import React, { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import withTitle from 'src/components/TitleComponent';
import { SubFallback } from 'src/components/Fallback';

import Sidebar from './Sidebar';

const Dashboard = lazy(() => import('./Appoints'));
const Login = lazy(() => import('./Login'));
const SignUp = lazy(() => import('./SignUp'));
// const Applications = lazy(() => import('./Applications'));
// const ProfileSetting = lazy(() => import('./ProfileSetting'));

const DashboardRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Container className="pt-8">
      <Row>
        <Col lg={3} md={12} sm={12}>
          <Sidebar />
        </Col>
        <Col lg={9} md={12} sm={12}>
          <Switch>
            <Route
              exact
              path={`${path}`}
              render={(props) =>
                withTitle({
                  component: Dashboard,
                  title: 'Employer Dashboard',
                  ...props,
                })
              }
            />
            <Route
              exact
              path={`${path}/login`}
              render={(props) =>
                withTitle({
                  component: Login,
                  title: 'Employer Dashboard',
                  ...props,
                })
              }
            />
            <Route
              exact
              path={`${path}/signup`}
              render={(props) =>
                withTitle({
                  component: SignUp,
                  title: 'Employer Dashboard',
                  ...props,
                })
              }
            />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardRoutes;
