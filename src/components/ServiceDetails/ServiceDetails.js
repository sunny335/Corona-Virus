import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceDetails = ({ data }) => {
  return (
    <div className="col-sm-6 col-md-6  col-lg-4 text-center mt-4 mx-auto">
      <FontAwesomeIcon
        icon={data.img}
        style={{ height: '60px', fontSize: 60 }}
        className="text-info"
      />
      <h5 className="my-3">{data.name}</h5>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores
        eligendi debitis officia maxime quos natus distinctio!
      </p>
    </div>
  );
};

export default ServiceDetails;
