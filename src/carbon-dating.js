const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(str) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  const a = MODERN_ACTIVITY / +str;
  const check = typeof str === 'string' && str > 0 && str < 15 ? true : false;
  let age = Math.ceil(Math.log(k / a));
  return check === true ? age : false;
};
