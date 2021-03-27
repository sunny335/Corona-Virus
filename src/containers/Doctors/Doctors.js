import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import DoctorsDetails from 'src/components/DoctorsDetails/DoctorsDetails';

const Doctors = () => {
  const doctorsDatas = useSelector((store) => store.doctors);

  return (
    <div style={{ marginTop: '100px', marginBottom: '100px' }}>
      <h3 style={{ textAlign: 'center' }} className="brand-text">
        Our Doctors
      </h3>
      <Grid container item xs={12}>
        {doctorsDatas.map(
          (data) => data.id < 4 && <DoctorsDetails data={data} />
        )}
      </Grid>
    </div>
  );
};

export default Doctors;
