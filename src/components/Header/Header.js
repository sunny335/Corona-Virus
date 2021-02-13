import React from 'react';
import BussinesInfo from '../BussinesInfo/BussinesInfo';
import HeaderContent from './HeaderContent/HeaderContent';
import Navbar from './Navbar/Navbar';
import './Header.css';
const Header = (props) => {
	return (
		<div className="header-container ">
			<div className="container">
				<Navbar />
				<HeaderContent>{props.children}</HeaderContent>
				{props.children ? '' : <BussinesInfo />}
			</div>
		</div>
	);
};

export default Header;
