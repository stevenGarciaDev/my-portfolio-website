import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import Footer from './components/footer.component';

import Home from './pages/home.component';
import About from './pages/about.component';
import ProjectDetail from './pages/project-detail.component';

import styled from 'styled-components';

function App() {
	const [isNavOpen, toggleNavStatus] = useState(false);

	return (
		<div className="App">
			<Navbar isNavOpen={isNavOpen} toggleNavStatus={toggleNavStatus} />
			<MainContent>
				<Switch>
					<Route path='/about' render={(props) => <About isNavOpen={isNavOpen} {...props} />} />
					<Route path='/project/:id' render={(props) => <ProjectDetail isNavOpen={isNavOpen} {...props} />} />
					<Route path='/' render={(props) => <Home isNavOpen={isNavOpen} {...props} />} />
				</Switch>
			</MainContent>
		<Footer />
		</div>
	);
}

const MainContent = styled.div`
  padding-top: 70px;
`;

export default App;
