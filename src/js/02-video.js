import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = 'videoplayer-current-time';

player.on('timeupdate', throttle(timePlay, 1000));

function timePlay({ seconds }) {
  localStorage.setItem(currentTime, seconds);
}

player.setCurrentTime(localStorage.getItem(currentTime));