import log from './log';

export default function getViewportSize() {
  const viewport =
    document.querySelector('.viewport') ||
    document.body ||
    document.documentElement;
  const {clientWidth, offsetWidth, clientHeight, offsetHeight} = viewport;
  const width = Math.min(offsetWidth, clientWidth, window.innerWidth);
  const height = Math.min(offsetHeight, clientHeight, window.innerHeight);
  // log(width, height);
  return {width, height};
}
