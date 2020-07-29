import React, { useState, useCallback, useEffect } from 'react';

import useInterval from 'common/hooks/useInterval';
import MainControls from 'components/MainControls';
import Timer from 'components/Timer';
import SpeedController from 'components/SpeedController';
import ToggleButton from 'components/ToggleButton';
import { BASE_TIMEOUT } from 'common/const';

import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [initialSeconds, setInitialSeconds] = useState(0);
  const [speed, setSpeed] = useState(BASE_TIMEOUT);
  const [isPaused, setIsPaused] = useState(true);

  const tick = useCallback(() => {
    if (seconds === 0) {
      setIsPaused(true);
    } else {
      setSeconds(seconds - 1);
    }
  }, [seconds]);

  useInterval(tick, isPaused ? null : speed);

  const handleStart = useCallback((value) => {
    const seconds = value * 60;
    setInitialSeconds(seconds);
    setSeconds(seconds);
    setIsPaused(false);
  }, []);

  return (
    <div className="App">
      <MainControls onStart={ handleStart }/>
      <Timer seconds={ seconds } initialSeconds={ initialSeconds }/>
      <SpeedController speed={ speed } onSpeedChange={ setSpeed }/>
      <ToggleButton isPaused={ isPaused } setIsPaused={ setIsPaused } disabled={ !seconds }/>
    </div>
  );
}

export default App;
