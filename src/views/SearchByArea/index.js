import React, { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';

import withTitle from 'src/components/TitleComponent';
import { SubFallback } from 'src/components/Fallback';

// import Sidebar from './Sidebar';

const Doctorlist = lazy(() => import('./doctorList'));
const HospitalList = lazy(() => import('./HospitalList'));
const AmbulanceList = lazy(() => import('./AmbulanceList'));

const SearchByArea = () => {
  const { path } = useRouteMatch();
  return (
    <Container className="pt-8">
      <Row>
        <Col>
          <Nav className="d-flex justify-content-center mt-5">
            <NavItem>
              <NavLink
                className="p-3 text-white m-1 text-decoration-none bg-info"
                to="/areasearch"
              >
                Doctors{' '}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="p-3 text-white m-1 text-decoration-none bg-info"
                to="/areasearch/hospitals"
              >
                Hospitals{' '}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="p-3 text-white m-1 text-decoration-none bg-info"
                to="/areasearch/ambulance"
              >
                Ambulances
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <Switch>
            <Route
              exact
              path={`${path}`}
              render={(props) =>
                withTitle({
                  component: Doctorlist,
                  title: 'Employer Dashboard',
                  ...props,
                })
              }
            />
            <Route
              exact
              path={`${path}/hospitals`}
              render={(props) =>
                withTitle({
                  component: HospitalList,
                  title: 'Employer Dashboard',
                  ...props,
                })
              }
            />
            <Route
              exact
              path={`${path}/ambulance`}
              render={(props) =>
                withTitle({
                  component: AmbulanceList,
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

export default SearchByArea;
