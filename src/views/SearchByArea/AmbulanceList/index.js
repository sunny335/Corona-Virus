import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Col, Container, Row } from 'reactstrap';
import district from '../areadata';
const AmbulanceList = () => {
  const [value, setValue] = useState(1);
  const [select, setSelect] = useState(null);

  const handleChange = (data) => {
    setValue(data.target.value);
  };

  const handleSubmits = (event) => {
    setSelect(value);
    event.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col md={12} className="text-center my-5">
          <h1>Select Your Area </h1>
        </Col>

        <Col md={{ size: 6, offset: 3 }}>
          <Form className="mb-5">
            <Form.Control
              as="select"
              defaultValue={value}
              onChange={handleChange}
            >
              {district &&
                district.map((item) =>
                  item.data.map((items) => (
                    <option value={items.id}>{items.name}</option>
                  ))
                )}
            </Form.Control>
          </Form>
          <h3 className="text-center mb-5"> Ambulances In Your Area</h3>
        </Col>
        <Col md={12}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Phone:</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            {district &&
              district.map((item) =>
                item.data.map((items) => (
                  <tbody>
                    {items.id == value &&
                      items.ambulance.map((ambulance) => (
                        <tr>
                          <th scope="row"> {ambulance.name}</th>
                          <th scope="row">+880{ambulance.phone}</th>
                          <th scope="row"> {ambulance.loacation}</th>
                        </tr>
                      ))}
                  </tbody>
                ))
              )}
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default AmbulanceList;
