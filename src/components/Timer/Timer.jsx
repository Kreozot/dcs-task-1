import React, { useMemo } from 'react';

import { formatTime } from 'common/format';
import { ATTENTION_SECONDS_LEFT, ALARM_SECONDS_LEFT } from 'common/const';

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

  const textClassName = useMemo(() => {
    if (seconds <= ALARM_SECONDS_LEFT) {
      return styles.messageAlarm;
    }
    if (seconds <= ATTENTION_SECONDS_LEFT) {
      return styles.messageAttention;
    }
    return styles.message;
  }, [seconds]);

  return (
    <div>
      <div className={ textClassName }>
        { text }
      </div>
      <div className={ styles.time }>
        { formatTime(seconds) }
      </div>
    </div>
  );
}
