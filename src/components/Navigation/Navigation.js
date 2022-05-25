import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
	return (
		<div>
			Hello from Navigation
			<div className='box'>
				<Link to='/'>
					<div className='box1'>Home</div>
				</Link>
				<Link to='/food'>
					<div className='box2'>Food</div>
				</Link>
				<Link to='/order'>
					<div className='box3'>Order</div>
				</Link>
				<Link to='/about'>
					<div className='box4'>About</div>
				</Link>
				<div className='box5'></div>
			</div>
		</div>
	);
}

export default Navigation;
