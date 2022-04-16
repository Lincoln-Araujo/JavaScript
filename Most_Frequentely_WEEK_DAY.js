function mostFrequentDays(year = new Date().getFullYear()) {
  // 1 Jan
  let d = new Date(year, 0);
  // Weekday name for 1 Jan
  let mostFrequent = [d.toLocaleString('en',{weekday:'long'})];
  let isLeap = new Date(year, 1, 29).getDate() == 29;
  // If leap year, add next day's name too
  if (isLeap) {
    d.setDate(d.getDate() + 1);
    mostFrequent.push(d.toLocaleString('en',{weekday:'long'}))
  }

  return mostFrequent;
};
