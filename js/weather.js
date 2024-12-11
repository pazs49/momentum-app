export const setWeatherTemperature = async (temperatureEl) => {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=14.5995&longitude=120.9842&current_weather=true"
    );
    const data = await response.json();
    temperatureEl.innerText = data.current_weather.temperature + "°C";
  } catch (error) {
    console.error("Error fetching weather data:", error);
    temperatureEl.innerText = "Error temperature API";
  }
};
