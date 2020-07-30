import format from 'date-fns/format';
import set from 'date-fns/set';

const SECONDS_IN_HOUR = 60 * 60;

export function formatTime(seconds) {
  const dateTime = set(new Date(), {
    hours: 0,
    minutes: 0,
    seconds: seconds || 0,
  });
  return format(dateTime, seconds > SECONDS_IN_HOUR ? 'HH:mm:ss' : 'mm:ss');
}
