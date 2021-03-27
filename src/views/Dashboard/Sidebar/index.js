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
import { useSelector, useDispatch } from 'react-redux';

const EmployerSidebar = () => {
  const data = useSelector((store) => store.loginInfo);
  const data2 = useSelector((store) => store.signupInfo);
  return (
    <Card className="sidebar-nav mb-6">
      <CardImg
        className="w-50 m-auto"
        src="https://scontent.fcgp8-1.fna.fbcdn.net/v/t1.0-9/160602385_3080232288874014_5919008396805321248_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=xfK313Onjd4AX981iYx&_nc_ht=scontent.fcgp8-1.fna&oh=af0dbd7acf5650ab1264812fbed4ebc2&oe=60822688"
      />
      <CardBody className="text-center">
        <CardTitle tag="h5"></CardTitle>@
        {data.map((item) => (
          <>
            {data2.map((items) => (
              <>{item.email == items.email && items.fullname}</>
            ))}
          </>
        ))}
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
            <NavLink exact to="/dashboard" className="text-decoration-none">
              <FontAwesomeIcon
                className="text-primary mr-3"
                icon={faTachometerAlt}
              />
              Appoints
            </NavLink>
          </ListGroupItem>

          <ListGroupItem>
            <NavLink
              exact
              to="/dashboard/login"
              className="text-decoration-none"
            >
              <FontAwesomeIcon className="text-primary mr-3" icon={faFile} />
              Login
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink
              exact
              to="/dashboard/signup"
              className="text-decoration-none"
            >
              <FontAwesomeIcon
                className="text-primary mr-3"
                icon={faSuitcase}
              />
              SignUp
            </NavLink>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
      <CardFooter className="bg-white p-0 py-3">
        <ListGroup>
          <ListGroupItem>
            <Link to="#" className="text-decoration-none">
              {' '}
              <FontAwesomeIcon
                className="text-primary mr-3"
                icon={faPowerOff}
              />
              Log out
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="#" className="text-decoration-none">
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
