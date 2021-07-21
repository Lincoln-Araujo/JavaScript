// creating a venue model to print on website
const createVenueHTML = (name, location, iconSource) => {
  return `<h2>${name}</h2>
  <img class="venueimage" src="${iconSource}"/>
  <h3>Address:</h3>
  <p>${location.address}</p>
  <p>${location.city}</p>
  <p>${location.state}</p>
  <p>${location.country}</p>`;
}

// creating a wheather model to print on website
const createWeatherHTML = (currentDay) => {
  console.log(currentDay)
  return `<h2>${weekDays[(new Date()).getDay()]}</h2>
    <p>${gettingDate(currentDay)}</p>
		<h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F / ${kelvinToCelsius(currentDay.main.temp)}&deg;C</h2>
		<h2>Condition: ${currentDay.weather[0].description}</h2>
  	<img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
}

// converting Kelvin to Fahrenheit
const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);

// converting Kelvin to Celsius
const kelvinToCelsius = k => (k - 273.15).toFixed(0);

// getting date
const gettingDate = currentDay => {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  return date;
}