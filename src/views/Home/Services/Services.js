import React from 'react';
import fluoride from 'src/assets/images/001-dental.png';
import Cavity from 'src/assets/images/tooth.png';
import Teeth from 'src/assets/images/tooth (1).png';
import ServiceDetails from 'src/components/ServiceDetails/ServiceDetails';
import DentalCare from 'src/components//DentalCare/DentalCare';
const serviceData = [
  { name: 'Fluoride Treatment', img: fluoride },
  { name: 'Cavity Felling', img: Cavity },
  { name: 'Teeth whitening', img: Teeth },
];
const Services = () => {
  return (
    <section
      style={{ height: '', textTransform: 'capitalize' }}
      className=" services-container d-flex align-item-center justify-content-center pb-5 my-5 py-5"
    >
      <div>
        <div className="text-center mt-5 pt-5 ">
          <h4 className="sub-title">our service</h4>
          <h2>Services we provide </h2>
        </div>
        <div className="row w-75 mx-auto mt-5 pt-5">
          {serviceData.map((data) => (
            <ServiceDetails key={data.name} data={data} />
          ))}
        </div>
        <DentalCare />
      </div>
    </section>
  );
};

export default Services;
