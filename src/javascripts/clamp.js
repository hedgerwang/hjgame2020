export default function clamp(val, min, max) {
  return val < min ? min : val > max ? max : val;
}
