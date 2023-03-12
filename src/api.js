import axios from "axios";
const key = process.env.REACT_APP_API_KEY;

const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: key,
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
export default SearchImages;
