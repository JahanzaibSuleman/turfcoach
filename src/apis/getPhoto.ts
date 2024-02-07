const getPhoto = async (searchKey: string) => {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${searchKey}&per_page=1`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY_PEXELS ?? "",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return data;
};

export default getPhoto;
