import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import Footer from './components/footer.component';

import Home from './pages/home.component';
import About from './pages/about.component';
import ProjectDetail from './pages/project-detail.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/project/:id' component={ProjectDetail} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
