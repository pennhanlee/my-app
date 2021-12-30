import React from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from "./container/welcome/Welcome"
import Carousel from "./container/carousel/Carousel"
import Body from "./container/body/Body"

function App() {
  return (
    <div>
      <Welcome/>
      <Carousel/>
      <Body/>
    </div>
  );
}

export default App;
