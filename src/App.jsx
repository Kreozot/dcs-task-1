import React, { useState, useCallback } from 'react';

import useInterval from 'common/hooks/useInterval';
import MainControls from 'components/MainControls';
import Message from 'components/Message';
import Timer from 'components/Timer';
import SpeedController from 'components/SpeedController';
import ToggleButton from 'components/ToggleButton';
import { BASE_TIMEOUT } from 'common/const';

import styles from './App.module.scss';

function App() {
  const [seconds, setSeconds] = useState(null);
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
    <div className={ styles.container }>
      <MainControls onStart={ handleStart }/>
      <Message seconds={ seconds } initialSeconds={ initialSeconds }/>
      <Timer seconds={ seconds }/>
      <div className={ styles.speedBlock }>
        <SpeedController speed={ speed } onSpeedChange={ setSpeed }/>
        <ToggleButton isPaused={ isPaused } setIsPaused={ setIsPaused } disabled={ !seconds }/>
      </div>
    </div>
  );
}

export default App;
