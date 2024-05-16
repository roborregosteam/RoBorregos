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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <div className="flex justify-center  relative ">
      <img
        src={images[(currentIndex - 1 + images.length) % images.length]}
        alt="previous"
        className="w-[600px] aspect-video object-cover rounded-xl scale-90"
      />
      <img
        src={images[currentIndex]}
        alt=""
        className="w-[600px] aspect-video object-cover rounded-xl scale-105"
      />
      <img
         src={images[(currentIndex + 1) % images.length]}
        alt=""
        className="w-[600px] aspect-video object-cover rounded-xl scale-90"
      />
      <div className="w-full h-full absolute bg-Gallery_Gradient "/>
    </div>
  );


};

export default GalleryCarrousell;
