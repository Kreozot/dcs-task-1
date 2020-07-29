import React, { useMemo } from 'react';

import { formatTime } from 'common/format';

import styles from './Timer.module.scss';

export default function Timer(props) {
  const { seconds, initialSeconds } = props;

  const text = useMemo(() => {
    if (seconds <= 0) {
      return 'Time’s up!';
    }
    if (seconds < (initialSeconds / 2)) {
      return 'More than halfway there!';
    }
    return '';
  }, [seconds, initialSeconds]);

  return (
    <div>
      <div className={ styles.message }>
        { text }
      </div>
      <div className={ styles.time }>
        { formatTime(seconds) }
      </div>
    </div>
  );
}
