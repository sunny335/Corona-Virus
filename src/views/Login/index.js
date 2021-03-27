import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addInfo } from 'src/state/ducks/login';

import { Link } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const data2 = useSelector((store) => store.signupInfo);

  const dispatch = useDispatch();
  const { handleSubmit, register, errors, reset } = useForm();

  let id = 0;
  const onSubmit = (data) => {
    {
      data2 &&
        data2.map((items) => {
          if (items.email == data.email && items.password == data.password) {
            id++;
            data.id = id;
            dispatch(addInfo(data));
            reset();
          }
        });
    }
    // console.log('login form data', data);
  };

  const defaultData = data2 && data2.filter((item) => item.id === 1)[0];
  console.log('def', defaultData);

  return (
    <Container className="pt-5 mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h5 className="text-muted font-weight-bold display-4 text-center">
            Sign in
          </h5>
          <p className="text-muted  font-weight-bold text-center">
            Please fill in this form to sign in to your account
          </p>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-5 rounded"
            style={{ background: '', padding: '20px' }}
          >
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Login As</Form.Label>
              <Form.Control
                as="select"
                name="loginAs"
                ref={register}
                defaultValue={defaultData.loginAs}
              >
                <option name="user" value="user">
                  User
                </option>
                <option name="admin" value="admin">
                  Admin
                </option>
                <option name="doctor" value="doctor">
                  Doctor
                </option>
                <option name="Service" value="service">
                  Services
                </option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                className="form-control form-control-solid h-auto border-info"
                ref={register({
                  required: true,
                })}
                defaultValue={defaultData.email}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                className="form-control form-control-solid h-auto border-info"
                ref={register({
                  required: true,
                  minLength: 5,
                })}
                defaultValue={defaultData.password}
              />
              {errors.password && errors.password.type === 'minLength' && (
                <span className="text-danger text-capitalize">
                  password minLength:5
                </span>
              )}
            </Form.Group>

            <Button
              disabled={loading}
              variant="primary"
              type="submit"
              className="d-block m-auto px-5 py-3 mt-4"
            >
              {loading ? 'Loading...' : 'Sign in'}
            </Button>
          </Form>
        </Col>
        <Col md={12}>
          <div md={12} className="text-center mt-5">
            <h6>New User?</h6>
            <Link to="/signup">Create a new account</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
