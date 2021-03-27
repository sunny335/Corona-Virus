import React from 'react';
import { useHistory } from 'react-router-dom';
import Ticker from 'react-ticker';

const HeaderContent = (props) => {
  const history = useHistory();
  const handleAppointment = () => {
    history.push('/appointment');
  };
  return (
    <main>
      <div
        style={{ height: '520px' }}
        className="row  d-flex align-items-center header-blog "
      >
        <div
          className="bg-info text-white border mb-5 position-fixed"
          style={{ top: 0, left: 0 }}
        >
          {/* <Ticker height={50}>
          {({ index }) => (
            <>
              <h1>Covid-19 cases are rising. States are opening up anyway.  per dayA breakdown of coronavirus deaths in the U.S., per day #{index}!  </h1>
              <h1>
                per dayA breakdown of coronavirus deaths in the U.S., per day
              </h1>
              <img src="www.my-image-source.com/" alt="" />
            </>
          )}
        </Ticker> */}
        </div>
        <div className=" col-lg-5 mt-3">
          {props.children ? (
            props.children
          ) : (
            <>
              <h1 className="display-4 font-weight-bold header-main-title">
                Your new smile start here{' '}
              </h1>
              <p className="text-secondary">
                Pfizer along with BioNTech SE have started testing their
                coronavirus vaccine on children under the age of 12. The goal is
                of expanding the inoculation campaign to protect children of
                that age by the time 2022 rolls in. Volunteers were brought in
                for their first injection on Wednesday.
              </p>
              <button
                onClick={handleAppointment}
                className="custom-btn font-weight-bold button"
              >
                Get Appointment
              </button>
            </>
          )}
        </div>
        <div className="col-lg-6 mt-3">
          <img
            className="img-fluid"
            src="https://img.etimg.com/photo/msid-75621394,quality-100/nose-swab_istock.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default HeaderContent;
