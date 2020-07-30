import React from 'react';

import SpeedButton from './SpeedButton'

import styles from './SpeedController.module.scss';

export default function SpeedController(props) {
  const { speed, onSpeedChange } = props;

  return (
    <div className={ styles.buttons }>
      <SpeedButton speed={ speed } multiplier={ 1 } onSpeedChange={ onSpeedChange }/>
      <SpeedButton speed={ speed } multiplier={ 1.5 } onSpeedChange={ onSpeedChange }/>
      <SpeedButton speed={ speed } multiplier={ 2 } onSpeedChange={ onSpeedChange }/>
    </div>
  );
}
