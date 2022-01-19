import React from "react";
import "./ImageCarousel.css";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import Image1 from "./Components/Image1.jpg";
import Image2 from "./Components/Image2.jpg";
import Image3 from "./Components/Image3.jpg";
import "bootstrap/dist/css/bootstarp.css";

const ImageCarousel = () => {
  const imageProperties = [
    {
      id: 1,
      title: "Image 1",
      src: Image1,
      credit: " image by Gulamnabi ",
    },
    {
      id: 2,
      title: "Image 1",
      src: Image2,
      credit: " image by Gulamnabi ",
    },
    {
      id: 3,
      title: "Image 1",
      src: Image3,
      credit: " image by Gulamnabi ",
    },
  ];
  return (
    <div className="slide">
      <Carousel>
        {imageProperties.map((ImageObj) => {
          <Carousel.Item key={ImageObj.id}>
            <ReactPlayer
              url={ImageObj}
              width="100%"
              pip={true}
              conttrols={true}
              playing={true}
            />
            <Carousel.Caption>
              <h3>{ImageObj.tittle}</h3>
              <p>{ImageObj.Credit}</p>
            </Carousel.Caption>
          </Carousel.Item>;
        })}
      </Carousel>
    </div>
  );
};

export default Carousel;
