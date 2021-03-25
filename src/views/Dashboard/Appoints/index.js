import { Card } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { CardHeader, Col, Row } from 'reactstrap';

const Appoints = () => {
  const appoints = useSelector((store) => store.appoints);
  const data2 = useSelector((store) => store.signupInfo);
  const data = useSelector((store) => store.loginInfo);

  return (
    <Row>
      <Col md={12} className="text-center my-5">
        <h2>Appoints Lists</h2>
      </Col>
      {appoints &&
        appoints.map((item) => (
          <Col md={3}>
            <Card>
              <CardHeader>
                Name: {item.fname} {item.lname}
              </CardHeader>
              <h6>Email: {item.email}</h6>
            </Card>
          </Col>
        ))}
    </Row>
  );
};
export default Appoints;
