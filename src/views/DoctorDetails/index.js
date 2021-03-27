import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
const DoctorDetails = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;

  const doctorsDatas = useSelector((store) => store.doctors);

  const details =
    doctorsDatas && doctorsDatas.filter((item) => item.id === parseInt(id))[0];

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <img src={details.img} alt="" className="img-fluid w-50" />
          <h4>Name:{details.name}</h4>
          <h6>Phone{details.phone}</h6>
          <p>{details.details}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(DoctorDetails);
