import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import { addInfos } from 'src/state/ducks/signup';

const SignUp = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.signupInfo);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const { handleSubmit, register, errors, reset } = useForm();

  console.log('signup data', data);
  const onSubmit = (data) => {
    dispatch(addInfos(data));
    console.log('sign up form data', data);
    reset();
  };
  return (
    <Container className="pt-5 mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h5 className="text-muted display-4 font-weight-bold text-center">
            Sign Up
          </h5>
          <p className="text-muted  font-weight-bold text-center">
            Please fill in this form to create an account
          </p>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-5 rounded"
            style={{ background: '', padding: '20px' }}
          >
            <Form.Group>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                placeholder="Full Name"
                type="text"
                className={`form-control form-control-solid h-auto   border-info`}
                name="fullname"
                ref={register({
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Email"
                type="email"
                className={`form-control form-control-solid h-auto  border-info`}
                name="email"
                ref={register({
                  required: true,
                })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Password"
                type="password"
                className={`form-control form-control-solid h-auto border-info`}
                name="password"
                ref={register({
                  required: true,
                })}
              />
            </Form.Group>

            <Button
              disabled={loading}
              variant="primary"
              type="submit"
              className="d-block m-auto px-5 py-3 mt-4"
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </Button>
          </Form>
        </Col>
        <Col md={12}>
          <div md={12} className="text-center mt-5">
            <h6>Already have an account?</h6>
            <Link to="/login">Login here</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
