import axios from "axios";
const key = process.env.API_KEY;

const SearchImages = async () => {
  console.log("key:", key);
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client ID ${key}`,
    },
    params: {
      query: "cats",
    },
  });

  return response.data.results;
};
export default SearchImages;
