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
  const locationResponse = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`)
  const locationData = await locationResponse.json();
  console.log(locationData);
  const locationId = await locationData[0].woeid;
  const weatherResponse = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${locationId}`);
  const weatherData = await weatherResponse.json();
  console.log(weatherData.consolidated_weather[0]);
}

getActualLocation();

