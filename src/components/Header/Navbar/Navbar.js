import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import './Navbar.css';

const Navbar = (props) => {
  const history = useHistory();
  const handleNavbar = () => {
    history.replace('/');
  };
  const data = useSelector((store) => store.loginInfo);
  const data2 = useSelector((store) => store.signupInfo);
  console.log('sign in', data);
  return (
    <section className="bg-info">
      <Container>
        <Row>
          <Col>
            <nav className="navbar navbar-expand-lg navbar-light ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                      }}
                      activeClassName="nav-style"
                      className="nav-link nav-text-black mr-3"
                      to="/"
                      exact
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                      }}
                      className="nav-link nav-text-black mr-3"
                      to="/appointment"
                      exact
                    >
                      Appointment
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                      }}
                      className={`nav-link navbar-text mr-3 text-light ${props.text} `}
                      to="/dashboard"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={handleNavbar}
                      activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                      }}
                      className={`nav-link navbar-text mr-3 text-light ${props.text} `}
                      href="/blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={handleNavbar}
                      activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                      }}
                      className={`nav-link navbar-text mr-3 text-light ${props.text} `}
                      href="/contact"
                    >
                      Contact Us
                    </a>
                  </li>

                  {data < 1 && (
                    <li className="nav-item">
                      <NavLink
                        activeStyle={{
                          fontWeight: 'bold',
                          color: 'red',
                        }}
                        className={`nav-link navbar-text mr-3 text-light ${props.text} `}
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </li>
                  )}
                  {data &&
                    data.map((item) => {
                      <li>{item.email} ppppppp{console.log('email',item.email)}</li>;
                    })}

                </ul>
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Navbar;
