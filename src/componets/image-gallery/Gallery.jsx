import React, { useState, useEffect } from "react";
import "../image-gallery/Gallery.css";
// import  images
import Image1 from "../image-gallery/assets/image-1.jpg";
import Image2 from "../image-gallery/assets/image-2.jpg";
import Image3 from "../image-gallery/assets/image-3.jpg";
import Image4 from "../image-gallery/assets/image-4.jpg";
import Image5 from "../image-gallery/assets/image-5.jpg";

function Gallery() {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    const data = [
      {
        id: 1,
        data: Image1,
        title: "Image 1",
      },

      {
        id: 2,
        data: Image2,
        title: "Image 2",
      },

      {
        id: 3,
        data: Image3,
        title: "Image 3",
      },

      {
        id: 4,
        data: Image4,
        title: "Image 4",
      },

      {
        id: 5,
        data: Image5,
        title: "Image 5",
      },
    ];
    setImages(data);
  };

  // initial loding image
  useEffect(() => {
    fetchImages();
  }, []);

  // delete
  const handleDeleteImage = (id) => {
    const deleteImage = images.filter((image) => image.id !== id);
    setImages(deleteImage);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Image Gallery App</h1>
      <div className="image-container">
        <p className={images.length > 0 ? "display-non" : ""}>
          No Images found..
        </p>
        {images.map((image) => (
          <div className="image-card" key={image.id}>
            <img src={image.data} alt="" />
            <div className="image-details">
              <h3>{image.title}</h3>
              <button onClick={() => handleDeleteImage(image.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallery;
