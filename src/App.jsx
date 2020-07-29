import React, { useState, useCallback } from 'react';

import useInterval from 'common/hooks/useInterval';
import MainControls from 'components/MainControls';
import Timer from 'components/Timer';
import SpeedController from 'components/SpeedController';

import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [isPaused, setIsPaused] = useState(true);

  const tick = useCallback(() => {
    setIsPaused(seconds === 0);
    setSeconds(seconds - 1);
  }, [seconds]);

  useInterval(tick, isPaused ? null : speed);

  const handleStart = useCallback((value) => {
    setIsPaused(false);
    setSeconds(value * 60);
  }, []);

  return (
    <div className="App">
      { console.log(speed, isPaused, seconds) }
      <MainControls onStart={ handleStart }/>
      <Timer seconds={ seconds }/>
      <SpeedController speed={ speed } onSpeedChange={ setSpeed }/>
    </div>
  );
}

export default App;
