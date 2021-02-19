import React from 'react';
import dentalImg from 'src/assets/images/smile.jpg';

const DentalInfo = [
  {
    img: dentalImg,
    title: 'Exceptional  care , on your terms',
  },
];
const DentalCare = () => {
  return (
    <section
      style={{ height: '', textTransform: 'capitalize' }}
      className="services-container pb-5 container text-sm-center text-md-left text-lg-left"
    >
      {DentalInfo.map((info) => (
        <div className="row  mt-5 pt-5  container">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="service-wrapper">
              <img
                className="img-fluid"
                style={{ height: '550px' }}
                src={info.img}
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6   ">
            <div className="pt-5">
              <h1 style={{ maxWidth: '500px' }} className="mb-2">
                {info.title}
              </h1>
              <p style={{ lineHeight: '30px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, maiores? Nulla nisi blanditiis delectus suscipit
                voluptatum iusto ullam necessitatibus sunt. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Mollitia inventore
                laboriosam ipsum eum commodi doloremque blanditiis dignissimos
                voluptatibus labore sequi? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Nobis, impedit.
              </p>
              <button className="btn custom-btn mt-5 ">Learn more</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DentalCare;
