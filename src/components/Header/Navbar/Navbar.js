import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Navbar.css';
const Navbar = (props) => {
	const history = useHistory();
	const handleNavbar = () => {
		history.replace('/');
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<NavLink
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							activeClassName="nav-style"
							className="nav-link nav-text-black mr-3"
							to="/home"
						>
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className="nav-link nav-text-black mr-3"
							to="/appointment"
						>
							Appointment
						</NavLink>
					</li>

					<li className="nav-item">
						<NavLink
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className={`nav-link navbar-text mr-3 text-light ${props.text} `}
							to="/appointmentByDate"
						>
							Dashboard
						</NavLink>
					</li>
					<li className="nav-item">
						<a
							onClick={handleNavbar}
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className={`nav-link navbar-text mr-3 text-light ${props.text} `}
							href="#blog"
						>
							Blog
						</a>
					</li>
					<li className="nav-item">
						<a
							onClick={handleNavbar}
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className={`nav-link navbar-text mr-3 text-light ${props.text} `}
							href="#contact"
						>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
