// keep all utility functions in one place

export function addCommasToNumber(x) {
  return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
}

export const generateNumSeries = (min, max, step) => {
  let values = [];
  for (var i = min; i <= max; i = step + i) values.push(i);
  return values;
};
