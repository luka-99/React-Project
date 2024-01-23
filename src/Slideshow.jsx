import { Slide } from "react-slideshow-image";
import PropTypes from "prop-types";
import imagesData from "../public/data/images.json";

function Slideshow({ properties }) {
  return (
    <div className="slideshow-container">
      <Slide {...properties}>
        {imagesData.map((image, index) => (
          <div className="slide-item" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slide>
    </div>
  );
}

Slideshow.propTypes = {
  properties: PropTypes.object.isRequired,
};

export default Slideshow;
