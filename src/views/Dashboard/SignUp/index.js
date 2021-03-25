import { Card } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { CardHeader, Col, Row } from 'reactstrap';

const SignUp = () => {
  const data2 = useSelector((store) => store.signupInfo);

  return (
    <Row>
      <Col md={12} className="text-center my-5">
        <h2>sign Up Lists</h2>
      </Col>
      {data2 &&
        data2.map((item) => (
          <Col md={3}>
            <Card>
              <CardHeader>Name: {item.fullname}</CardHeader>
              <h6>Email: {item.email}</h6>
            </Card>
          </Col>
        ))}
    </Row>
  );
};
export default SignUp;
