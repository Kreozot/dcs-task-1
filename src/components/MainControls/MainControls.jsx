import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './MainControls.module.scss';

export default function MainControls(props) {
  const { onStart } = props;

  const [minutes, setMinutes] = useState('');

  const handleMinutesChange = useCallback(({ target: { value } }) => {
    const intValue = parseInt(value);
    setMinutes(isNaN(intValue) ? '' : intValue);
  }, []);

  const handleStartClick = useCallback(() => {
    onStart(minutes);
  }, [onStart, minutes]);

  return (
    <form className={ styles.form }>
      <TextField
        id="minutes"
        label="Minutes"
        value={ minutes }
        onChange={ handleMinutesChange }
      />
      <Button
        variant="contained"
        color="primary"
        onClick={ handleStartClick }
      >
        Start
      </Button>
    </form>
  );
}
