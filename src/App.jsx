import React from 'react';

import MainControls from 'components/MainControls';
import Timer from 'components/Timer';
import SpeedController from 'components/SpeedController';

import './App.css';

function App() {
  return (
    <div className="App">
      <MainControls/>
      <Timer/>
      <SpeedController/>
    </div>
  );
}

export default App;
