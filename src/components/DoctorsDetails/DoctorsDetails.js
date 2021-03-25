import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addInfo } from 'src/state/ducks/doctors';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

let id = 0;

const DoctorsDetails = ({ data }) => {
  const [modal, setModal] = useState(false);
  const appoints = useSelector((store) => store.appoints);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const { handleSubmit, register, errors, reset } = useForm();
  const onSubmit = (datas) => {
    id++;
    datas.id = id;
    datas.doctorsId = data.id;
    dispatch(addInfo(datas));

    toggle();
    // reset();
  };
  // console.log('appoints', appoints);
  return (
    <>
      <Grid container direction="column" alignItems="center" item md={4}>
        <div style={{ height: '250px', overflow: 'hidden' }}>
          <Link to={`/details/${data.id}`}>
            <img style={{ width: '350px' }} src={data.img} alt="" />
          </Link>
        </div>
        <h3 style={{ color: '#4e4d4e', marginBottom: '7px' }}>{data.name}</h3>
        <b style={{ margin: '0', color: 'rgba(78, 77, 78, 0.451)' }}>
          {data.phone}
        </b>
        <b style={{ margin: '0', color: 'rgba(78, 77, 78, 0.451)' }}>
          {data.time}
        </b>
        <h6>Appoint left: {data.appoints}</h6>
        {data.appoints > 0 ? (
          <Button color="info" onClick={toggle}>
            Make Appointment
          </Button>
        ) : (
          <h6 className="bg-danger p-2">Wait For Next Shedule</h6>
        )}
        <div>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} charCode="Y">
              Make Appointment
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="py-2">
                  <Form.Control
                    type="text"
                    name="fname"
                    placeholder="first name"
                    ref={register({ required: true })}
                  />
                </Form.Group>
                <Form.Group className="py-2">
                  <Form.Control
                    type="text"
                    name="lname"
                    placeholder="last  name"
                    ref={register({ required: true })}
                  />
                </Form.Group>
                <Form.Group className="py-2">
                  <Form.Control
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Your email"
                    className="d-block"
                    ref={register({ minLength: 5, required: true })}
                  />
                  {console.log('err', errors.lname && 'not found')}
                </Form.Group>
                <Button color="primary" type="submit">
                  Save
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </Form>
            </ModalBody>
            <ModalFooter />
          </Modal>
        </div>
      </Grid>
    </>
  );
};

export default DoctorsDetails;
