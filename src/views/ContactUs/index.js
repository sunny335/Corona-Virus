import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Container,
} from 'reactstrap';

const ContactUs = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  return (
    <Container className="mt-5">
      <Row>
        <Col
          lg={{ size: 6, offset: 3 }}
          md={12}
          className="px-3 px-sm-0 px-md-5 px-lg-3 px-xl-5 contact-us-content"
        >
          <p className="fs-1 text-center text-md-start mb-0 md-sm-3">
            Have doubts? Don't Worry just <b>Contact Us.</b>
          </p>

          <Form className="contact-us">
            <Row>
              <Col lg={6}>
                <FormGroup row className="my-3 my-lg-0">
                  <Label
                    htmlFor="name"
                    className=" fs-5 text-primary fw-bold  pb-2"
                  >
                    Name*
                  </Label>
                  <Col md={12}>
                    <input
                      name="name"
                      ref={register({
                        required: true,
                        maxLength: 30,
                      })}
                      type="text"
                      placeholder="Enter you full name"
                      className="form-control inp"
                    />
                    {errors.name && errors.name.type === 'required' && (
                      <span className="text-danger">
                        Please enter your name
                      </span>
                    )}
                  </Col>
                </FormGroup>
              </Col>
              <Col lg={6}>
                <FormGroup row>
                  <Label
                    htmlFor="email"
                    className="fs-5 text-primary fw-bold pb-2"
                  >
                    Email*
                  </Label>
                  <Col md={12}>
                    <input
                      name="email"
                      ref={register({
                        required: true,
                        maxLength: 30,
                      })}
                      type="email"
                      placeholder="Enter your Email Address"
                      className="form-control inp"
                    />
                    {errors.mail && errors.mail.type === 'required' && (
                      <span className="text-danger">
                        Please enter your email id
                      </span>
                    )}
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup row className="my-2">
              <Label htmlFor="sub" className="fs-5 text-primary fw-bold pb-2">
                Subject*
              </Label>
              <Col md={12}>
                <input
                  name="subject"
                  ref={register({ required: true })}
                  type="text"
                  placeholder="Subject"
                  className="form-control inp"
                />
                {errors.subject && errors.subject.type === 'required' && (
                  <span className="text-danger">
                    Please enter your matter of doubts
                  </span>
                )}
              </Col>
            </FormGroup>

            <FormGroup row className="mb-2">
              <Label htmlFor="msg" className="fs-5 text-primary fw-bold pb-2">
                Message
              </Label>
              <Col md={12}>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  ref={register({
                    required: true,
                    maxLength: 800,
                  })}
                  className="form-control inp "
                  rows="4"
                />
                {errors.message && errors.message.type === 'required' && (
                  <span className="text-danger">Please write in detail</span>
                )}
              </Col>
            </FormGroup>

            <Row className="px-2">
              <Col className="text-center text-md-end">
                <Button
                  type="submit"
                  color="primary"
                  className="d-md-inline-block me-1 px-5"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
