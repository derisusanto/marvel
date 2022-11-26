import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';

import { Banner } from './component/banner/banner';
import { LoadingSuspen } from './component/loadingComponent/loadingSuspen';

const Hero = React.lazy(() => import('./pages/heroes/index'));
const Herodetail = React.lazy(() => import('./pages/detailHero/index'));

function App() {
	return (
		<Suspense fallback={<LoadingSuspen />}>
			<div className="App">
				<div className="layout">
					<Banner />
					<Router>
						<Routes>
							<Route exact="/" path="/" element={<Hero />} />
							<Route path="/hero/:id" element={<Herodetail />} />
						</Routes>
					</Router>
				</div>
			</div>
		</Suspense>
	);
}

export default App;
