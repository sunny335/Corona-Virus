import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import DoctorsDetails from 'src/components/DoctorsDetails/DoctorsDetails';
import { useSelector } from 'react-redux';

const Appointment = () => {
  const doctorsDatas = useSelector((store) => store.doctors);

  return (
    <Container fluid>
      <Row>
        {doctorsDatas.map((data) => (
          <Col md={4}>
            <DoctorsDetails data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Appointment;
