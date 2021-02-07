const CORS_PROXY = 'http://localhost:3000/';

getActualLocation = () => {
  if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(returnActualLocation) 
  }
}

returnActualLocation = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  getCurrentWeather(latitude, longitude);
}


getCurrentWeather = async (lat, long) => {
  const locationResponse = await fetch(`${CORS_PROXY}weather/current?lat=${lat}&long=${long}`)
  const locationData = await locationResponse.json();
  const locationId = await locationData[0].woeid;
  getWeatherByLocationId(locationId);
}

getWeatherByLocationId = async (locationId) => {
  const weatherResponse = await fetch(`${CORS_PROXY}weather/locationId?locationId=${locationId}`);
  const weatherData = await weatherResponse.json();
  console.log(weatherData.consolidated_weather[0]);  
}

getActualLocation();