const getWeatherDetails = async (
  lat: number | undefined,
  lon: number | undefined
) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return data;
};

export default getWeatherDetails;
