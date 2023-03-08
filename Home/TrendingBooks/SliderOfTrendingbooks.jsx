/* eslint-disable react/prop-types */
import React from "react";
import Image from "../../../images/book.jpg";
import styles from "./Slider.module.css";

function SliderOfTrendingbooks({ data }) {
  return (
    <div className="text-center">
      <img className={`${styles.img1}`} src={Image} alt={data.title} />
      <p className={`${styles.pTitle}`}>{data.title}</p>
    </div>
  );
}

export default SliderOfTrendingbooks;
