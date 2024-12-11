export const setWeatherTemperature = async (temperatureEl) => {
  try {
    //Balanga coords
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=14.6799&longitude=120.5421&current_weather=true"
    );
    const data = await response.json();
    let weather = "";
    switch (data.current_weather.weathercode) {
      case 0:
        weather = "Fine";
        break;
      case 1:
        weather = "Light Precipitation";
        break;
      case 2:
        weather = "Moderate Precipitation";
        break;
      case 3:
        weather = "Heavy Precipitation";
        break;
      case 4:
        weather = "Thunderstorms";
        break;
      case 5:
        weather = "Mist";
        break;
      case 6:
        weather = "Freezing Precipitation";
        break;
      case 7:
        weather = "Snow";
        break;
      case 8:
        weather = "Ice Crystals";
        break;
      default:
        weather = "Unknown";
        break;
    }

    temperatureEl.innerText =
      data.current_weather.temperature + "°C" + "/" + weather;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    temperatureEl.innerText = "Error temperature API";
  }
};
