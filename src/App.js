import "./App.css";
import ImageSearch from "./ImageSearch";
import SearchImages from "./api";
import ImageList from "./ImageList";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    setImages(result);
  };
  return (
    <>
      <ImageSearch onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
