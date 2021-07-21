// Foursquare API Info
const clientId = '2MKWSLC0CYSPVLBQAKTRET313YGMBCKMWRP1VCDYENCLGWT2';
const clientSecret = 'DRNOXOR5P4LBEI10GIWX0KCKN5ABUKUAMFNOAXBM5DDRXIXN';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = 'ad21aa0e93281234d77fe50bb70510f6';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//  AJAX functions 

// Getting venues with an async function
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20210701`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      console.log(venues);
      return venues;
    }
  } catch (error) {
    console.log(error);
  }
}

// Getting forecast
const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
}


// Render functions

// Using a random value as index to sort differents venues
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue) => {
    let randomVenue = Math.floor(Math.random() * venues.length);
    const venue = venues[randomVenue];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

// Rendering forecast
const renderForecast = (day) => {
  let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

// execute function
const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues));
  getForecast().then(forecast => renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)