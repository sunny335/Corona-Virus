import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
  ListGroup,
  ListGroupItem,
  Progress,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSuitcase,
  faMobile,
  faUserPlus,
  faTag,
  faTachometerAlt,
  faEdit,
  faFile,
  faPowerOff,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

const EmployerSidebar = () => {
  return (
    <Card className="sidebar-nav mb-6">
      <CardImg
        className="w-50 m-auto"
        src="https://webstrot.com/html/jbdesk/main_version/dashboard/images/web.png"
      />
      <CardBody className="text-center">
        <CardTitle tag="h5">Luca Wallace</CardTitle>
        <p className="text-primary m-0">@username</p>
      </CardBody>
      <CardBody>
        <div className="d-flex justify-content-between">
          <h6>Profile</h6>
          <h6>80%</h6>
        </div>
        <Progress color="primary" animated value={80} />
      </CardBody>
      <CardBody className="p-0">
        <ListGroup>
          <ListGroupItem>
            <NavLink exact to="/dashboard">
              <FontAwesomeIcon
                className="text-primary mr-3"
                icon={faTachometerAlt}
              />
              Dashboard
            </NavLink>
          </ListGroupItem>

          <ListGroupItem>
            <NavLink exact to="/dashboard/login">
              <FontAwesomeIcon className="text-primary mr-3" icon={faFile} />
              Login
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink exact to="/dashboard/signup">
              <FontAwesomeIcon
                className="text-primary mr-3"
                icon={faSuitcase}
              />
              SignUp
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink exact to="/employer/application">
              <FontAwesomeIcon className="text-primary mr-3" icon={faMobile} />
              Application
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink exact to="/employer/post">
              <FontAwesomeIcon
                className="text-primary mr-3"
                icon={faUserPlus}
              />
              Post New Job
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink exact to="/employer/plan">
              <FontAwesomeIcon className="text-primary mr-3" icon={faTag} />
              Pricing Plans
            </NavLink>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
      <CardFooter className="bg-white p-0 py-3">
        <ListGroup>
          <ListGroupItem>
            <Link to="#">
              {' '}
              <FontAwesomeIcon
                className="text-primary mr-3"
                icon={faPowerOff}
              />
              Log out
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="#">
              {' '}
              <FontAwesomeIcon
                className="text-primary mr-3"
                icon={faTrashAlt}
              />
              Delete Profile
            </Link>
          </ListGroupItem>
        </ListGroup>
      </CardFooter>
    </Card>
  );
};

export default EmployerSidebar;
