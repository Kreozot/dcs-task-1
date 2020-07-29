import React, { useMemo, useCallback } from 'react';
import Button from '@material-ui/core/Button';

import { BASE_TIMEOUT } from 'common/const';

export default function SpeedButton(props) {
  const { speed, multiplier, onSpeedChange } = props;

  const variant = useMemo(() => {
    return speed === BASE_TIMEOUT / multiplier ? 'contained' : null;
  }, [multiplier, speed]);

  const title = useMemo(() => {
    return `${ Math.round(multiplier * 10) / 10 }X`;
  }, [multiplier]);

  const handleClick = useCallback(() => {
    onSpeedChange(BASE_TIMEOUT / multiplier);
  }, [onSpeedChange, multiplier]);

  return (
      <Button
        variant={ variant }
        color="primary"
        onClick={ handleClick }
      >
        { title }
      </Button>
  );
}
