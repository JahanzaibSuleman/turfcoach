const getCities = async (searchKey: string) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${searchKey}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return data;
};

export default getCities;
