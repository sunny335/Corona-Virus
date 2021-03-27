import React, { lazy, useState } from 'react';
import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';

import withTitle from 'src/components/TitleComponent';
import { SubFallback } from 'src/components/Fallback';
// Style
import './style.scss';
// import Sidebar from './Sidebar';

const Doctorlist = lazy(() => import('./doctorList'));
const HospitalList = lazy(() => import('./HospitalList'));
const AmbulanceList = lazy(() => import('./AmbulanceList'));

const SearchByArea = () => {
  const [click, setClick] = useState('doctors');
  const { path } = useRouteMatch();
  return (
    <Container className="pt-8">
      <Row>
        <Col>
          <Nav className="d-flex justify-content-center mt-5">
            <NavItem>
              <NavLink
                className={`${
                  click == 'doctors' && 'actives'
                } p-3 text-white m-1 text-decoration-none bg-info`}
                to="/areasearch"
                onClick={() => setClick('doctors')}
              >
                Doctors{' '}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${
                  click == 'hospitals' && 'actives'
                } p-3 text-white m-1 text-decoration-none bg-info`}
                to="/areasearch/hospitals"
                onClick={() => setClick('hospitals')}
              >
                Hospitals{' '}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${
                  click == 'ambulances' && 'actives'
                } p-3 text-white m-1 text-decoration-none bg-info`}
                to="/areasearch/ambulance"
                onClick={() => setClick('ambulances')}
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
