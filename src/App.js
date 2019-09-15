import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import MainSlider from './Components/MainSlider/MainSlider';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="sliderContainer">
        <MainSlider />
      </div>
    </div>
  );
}

export default App;
