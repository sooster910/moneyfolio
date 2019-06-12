import React from "react";
import PropTypes from "prop-types";

const Card = ({ property }) => {
  const { index, title, image } = property;
  return (
    <div id={`card-${index}`} className="card">
      <div className="card-slider-item card-details">
        {/* <span className="index">{index + 1}</span> */}
        <h1>{title}</h1>
      </div>

      <div className="card-slider-item card-img-wrapper">
        <img src={image} alt={title} className="card-img" />
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
