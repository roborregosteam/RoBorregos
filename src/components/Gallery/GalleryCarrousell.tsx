import { useEffect, useState } from "react";

const GalleryCarrousell = () => {
  const images = [
    "https://roborregos.com/static/media/1.531e3de3251f37e6f56a.jpg",
    "https://roborregos.com/static/media/2.35007839edb34ff91093.jpg",
    "https://roborregos.com/static/media/3.5060f121a14ca5679994.jpg",
    "https://roborregos.com/static/media/4.d5f17462d1b63b6e3acc.jpg",
    "https://roborregos.com/static/media/5.71fb42d50fb2efd6ec3e.jpg",
    "https://roborregos.com/static/media/6.5cf57c0319c99ec00fdf.jpg",
    "https://roborregos.com/static/media/7.a87935e4637ae459380b.jpg",
    "https://roborregos.com/static/media/8.5d6e9986e3e60bfe483e.jpg",
    "https://roborregos.com/static/media/9.1cd6b2edb4c61e3f3a2e.jpg",
    "https://roborregos.com/static/media/10.ed513f8452d5e4bdc18c.jpg",
    "https://roborregos.com/static/media/11.d9fa0882116eafd27677.jpg",
    "https://roborregos.com/static/media/12.4c38ea3a9f916f07f81f.jpg",
  ];

  return (
    <div className="flex-grow flex items-center justify-center  space-x-10 overflow-x-scroll border">
      {/* {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="gallery"
          className="w-1/2 h-1/2 object-cover rounded-md"
        />
      ))} */}
      <div className="p-5 bg-red-500 w-1/2 h-1/2" >
        <img src={images[0]} alt="gallery" className=" rounded-md" />
      </div>
      {/* <img

        src={images[1]}
        alt="gallery"
        className=" rounded-md"
      />
      <img

        src={images[2]}
        alt="gallery"
        className=" rounded-md"
      /> */}
    </div>
  );
};

export default GalleryCarrousell;
