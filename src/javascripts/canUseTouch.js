export default function canUseTouch() {
  const {defaultView, documentElement} = document;
  const style = defaultView.getComputedStyle(documentElement, 'before');
  console.log(style.content);
  return /touch/.test(String(style.content));
}
