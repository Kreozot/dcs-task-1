import format from 'date-fns/format';
import set from 'date-fns/set';

export function formatTime(seconds) {
  const dateTime = set(new Date(), {
    hours: 0,
    minutes: 0,
    seconds: seconds || 0,
  });
  return format(dateTime, 'mm:ss');
}
