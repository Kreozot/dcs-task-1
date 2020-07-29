import React, { useMemo, useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export default function SpeedButton(props) {
  const { isPaused, setIsPaused, disabled } = props;

  const handleClick = useCallback(() => {
    setIsPaused(!isPaused);
  }, [setIsPaused, isPaused]);

  const icon = useMemo(() => {
    return isPaused
      ? <PlayCircleOutlineIcon/>
      : <PauseCircleOutlineIcon/>;
  }, [isPaused]);

  return (
      <IconButton
        color="primary"
        onClick={ handleClick }
        disabled={ disabled }
      >
        { icon }
      </IconButton>
  );
}
