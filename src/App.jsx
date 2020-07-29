import React, { useState, useCallback, useEffect } from 'react';

import useInterval from 'common/hooks/useInterval';
import MainControls from 'components/MainControls';
import Timer from 'components/Timer';
import SpeedController from 'components/SpeedController';

import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [initialSeconds, setInitialSeconds] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [isPaused, setIsPaused] = useState(true);

  const tick = useCallback(() => {
    setIsPaused(seconds === 0);
    setSeconds(seconds - 1);
  }, [seconds]);

  useInterval(tick, isPaused ? null : speed);

  useEffect(() => {
    setIsPaused(false);
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  const handleStart = useCallback((value) => {
    setInitialSeconds(value * 60);
  }, []);

  return (
    <div className="App">
      <MainControls onStart={ handleStart }/>
      <Timer seconds={ seconds } initialSeconds={ initialSeconds }/>
      <SpeedController speed={ speed } onSpeedChange={ setSpeed }/>
    </div>
  );
}

export default App;
