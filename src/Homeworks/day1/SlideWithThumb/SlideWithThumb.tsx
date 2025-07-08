import React from "react";
import style from "./style.module.css";
type Props = {};
const images = [
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png",
];
export default function SlideWithThumb({}: Props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className={style.slide_wrapper}>
        <h2>Slide with thumb</h2>
      <div className={style.mainImage}>
        <img src={images[activeIndex]} alt={`Slide ${activeIndex}`} />
      </div>
      <div className={style.thumbs}>
        {images.map((image, index) => (
          <div
            key={index}
            className={activeIndex === index ? style.active : ""}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className={style.imageChild}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
