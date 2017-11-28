import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Join from './components/Join';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="line-1 anim-typewriter">Meals 4 Miles</h1>
        <NavBar />
        <Home />
        <About />
        <Join />
        <Footer />
        
      </div>
    );
  }
}

export default App;
