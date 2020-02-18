const dom = document.createElement('div');
dom.className = 'log';

let enabled = 0;

export default function log(...args) {
  if (!enabled) {
    return;
  }
  if (!dom.parentNode && document.body) {
    document.body.appendChild(dom);
  }
  dom.textContent = JSON.stringify(args);
  console.log.apply(console, args);
}
