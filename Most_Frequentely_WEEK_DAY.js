function mostFrequentDays(year = new Date().getFullYear()) {
  let dayName = d => d.toLocaleString('en',{weekday:'long'});
  // 1 Jan
  let d = new Date(year, 0, 1);
  let dayZero = dayName(d);
  // 31 Dec
  let dayOne = dayName(new Date(year, 11, 31));
  let result = dayZero == dayOne? [dayZero] : [dayZero, dayOne];
  // If d0 is Sunday, reverse result
  return d.getDay()? result : result.reverse();
};
