import React from 'react';

import { formatTime } from 'common/format';

import styles from './Timer.module.scss';

export default function Timer(props) {
  const { seconds } = props;

  return (
    <div>
      <div className={ styles.message }>
      </div>
      <div className={ styles.time }>
        { formatTime(seconds) }
      </div>
    </div>
  );
}
