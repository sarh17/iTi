/* eslint-disable react/prop-types */
import React from "react";
import Image from "../../../images/book.jpg";

function HeroSlider({ data }) {
  return (
    <div className="container">
      <img className="image-ver" src={Image} alt={data.title} />
    </div>
  );
}

export default HeroSlider;
