import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Col, Container, Row, Button } from 'reactstrap';
import district from '../areadata';
const Doctorlist = () => {
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
          <h3 className="text-center mb-5"> Doctors In Your Area</h3>
        </Col>
        <Col md={12}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">gender</th>
                <th scope="col">email</th>
                <th scope="col" className="col-md-5">
                  details
                </th>
                <th scope="col">Make Appoints</th>
              </tr>
            </thead>
            {district &&
              district.map((item) =>
                item.data.map((items) => (
                  <tbody>
                    {items.id == value &&
                      items.doctors.map((doctor) => (
                        <tr>
                          <th scope="row"> {doctor.name}</th>
                          <th scope="row"> {doctor.gender}</th>
                          <th scope="row"> {doctor.email}</th>
                          <th scope="row"> {doctor.details}</th>
                          <th scope="row">
                            {' '}
                            <Button color="info">Make Appoints</Button>
                          </th>
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

export default Doctorlist;
