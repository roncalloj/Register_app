import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './component/footer';
import { Navbar } from './component/navbar';

const Layout = () => {
	const basename = process.env.BASENAME || '';

	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
