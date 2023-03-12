import ImageDisplay from "./ImageDisplay";

function ImageList({images}) {
  const renderedImages = images.map((image) => {
    return <ImageDisplay key={image.id} image={image} />
  })
  return (
<div> 
  {renderedImages}
</div>
  )
}


export default ImageList;