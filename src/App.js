import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import Home from './pages/home.component';
import About from './pages/about.component';
import Footer from './components/footer.component';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
