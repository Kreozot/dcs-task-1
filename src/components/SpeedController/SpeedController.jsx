import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import SpeedButton from './SpeedButton'

import styles from './SpeedController.module.scss';

export default function SpeedController(props) {
  const { speed, onSpeedChange } = props;

  return (
    <ButtonGroup color="primary">
      <SpeedButton speed={ speed } multiplier={ 1 } onSpeedChange={ onSpeedChange }/>
      <SpeedButton speed={ speed } multiplier={ 1.5 } onSpeedChange={ onSpeedChange }/>
      <SpeedButton speed={ speed } multiplier={ 2 } onSpeedChange={ onSpeedChange }/>
    </ButtonGroup>
  );
}
