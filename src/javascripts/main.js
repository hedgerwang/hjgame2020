import Game from './Game';

window.onload = () => {
  const matches = window.location.search.match(/level=(\d+)/);
  const level = matches && +matches[1];
  new Game(level || 1);
};
