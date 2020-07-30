import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './MainControls.module.scss';

const MINUTES_IN_DAY = 60 * 24;

export default function MainControls(props) {
  const { onStart } = props;

  const [minutes, setMinutes] = useState('');

  const handleMinutesChange = useCallback(({ target: { value } }) => {
    let intValue = parseInt(value);
    if (intValue > MINUTES_IN_DAY) {
      intValue = MINUTES_IN_DAY;
    }
    setMinutes(isNaN(intValue) ? '' : intValue);
  }, []);

  const handleStart = useCallback((event) => {
    event.preventDefault();
    onStart(minutes);
  }, [onStart, minutes]);

  return (
    <form className={ styles.form } onSubmit={ handleStart }>
      <TextField
        id="minutes"
        label="Minutes"
        value={ minutes }
        onChange={ handleMinutesChange }
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Start
      </Button>
    </form>
  );
}
