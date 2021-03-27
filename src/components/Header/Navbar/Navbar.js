import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from 'src/state/ducks/login';
import './Navbar.css';

const Navbar = (props) => {
  const history = useHistory();
  const handleNavbar = () => {
    history.replace('/');
  };

  const dispatch = useDispatch();

  const data = useSelector((store) => store.loginInfo);
  const data2 = useSelector((store) => store.signupInfo);
  console.log('sign in', data);
  return (
    <section className="bg-info mt-5">
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
                      className="nav-link nav-text-black mr-3"
                      to="/areasearch"
                      exact
                    >
                      Search Your Area
                    </NavLink>
                  </li>
                  {data &&
                    data.map(
                      (items) =>
                        items.loginAs == 'admin' && (
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
                        )
                    )}

                  <li className="nav-item">
                    <NavLink
                      activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                      }}
                      className={`nav-link navbar-text mr-3 text-light ${props.text} `}
                      to="/contact"
                    >
                      Contact
                    </NavLink>
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
                  {data.map((item) => (
                    <>
                      <li className=" text-white me-3">
                        {data2.map((items) => (
                          <h4 className="mb-0 border p-2">
                            {item.email == items.email && items.fullname}
                          </h4>
                        ))}
                        {/* {item.email} tttttt{console.log('email', item.email)} */}
                      </li>
                      <li>
                        <Button
                          outline
                          onClick={() => dispatch(deleteItem(1))}
                          className="text-white"
                        >
                          Log out
                        </Button>
                      </li>
                    </>
                  ))}
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
