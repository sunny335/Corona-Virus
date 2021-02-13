import React from 'react';
import { useHistory } from 'react-router-dom';
import contentImg from 'src/assets/images/Mask Group 1.png';
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
				<div className=" col-lg-5 mt-3">
					{props.children ? (
						props.children
					) : (
						<>
							<h1 className="display-4 font-weight-bold header-main-title">
								Your new smile start here{' '}
							</h1>
							<p className="text-secondary">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus commodi corrupti exercitationem iste amet
								dolore!
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
					<img className="img-fluid" src={contentImg} alt="" />
				</div>
			</div>
		</main>
	);
};

export default HeaderContent;
