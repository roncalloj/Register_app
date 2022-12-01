import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import { Demo } from './pages/demo';
import { Home } from './pages/home';
import { Single } from './pages/single';
import injectContext from './store/appContext';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/demo" element={<Demo />} />
					<Route path="/single/:theid" element={<Single />} />
					<Route path="*" element={<h1>Route not found</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default injectContext(AppRoutes);
