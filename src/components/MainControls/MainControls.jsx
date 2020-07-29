import React, { useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './MainControls.module.scss';

export default function MainControls(props) {
  const { onStart } = props;

  const handleStartClick = useCallback(() => {

  }, []);

  return (
    <form className={ styles.form }>
      <TextField label="Minutes"/>
      <Button variant="contained" color="primary" onClick={ handleStartClick }>
        Start
      </Button>
    </form>
  );
}
