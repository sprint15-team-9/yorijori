export const formatTime = (seconds: number | null) => {
  if (!seconds) return '';

  // const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  // const remainingSeconds = seconds % 60;

  // const formattedHours = hours.toString() + '시간';
  const formattedMinutes = minutes.toString() + '분';
  // const formattedSeconds = remainingSeconds.toString() + '초';

  const time = [];
  // if (hours !== 0) {
  //   time.push(formattedHours);
  // }
  if (minutes !== 0) {
    time.push(formattedMinutes);
  }
  // if (remainingSeconds !== 0) {
  //   time.push(formattedSeconds);
  // }

  return time.join(' ');
};
