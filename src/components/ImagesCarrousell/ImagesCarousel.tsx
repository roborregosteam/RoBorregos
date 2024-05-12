import { useState } from "react";

interface ImagesCarouselProps {
  images: string[];
  imagesAlt: string[];
}

export default function ImagesCarousel({
  images,
  imagesAlt,
}: {
  images: string[];
  imagesAlt: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(2 + images.length);

  const imagesFull = images
    .concat(images)
    .concat(images)
    .concat(images)
    .concat(images);
  const imagesAltFull = imagesAlt
    .concat(imagesAlt)
    .concat(imagesAlt)
    .concat(imagesAlt)
    .concat(imagesAlt);

  const handleNext = () => {
    if (currentIndex === imagesAltFull.length - 1) {
      setCurrentIndex(1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex === 1) {
      setCurrentIndex(imagesAltFull.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex w-full mt-4 overflow-hidden ">
      {imagesFull?.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            alt={imagesAltFull[index]}
            className={`w-1/4 h-fit self-center m-[3.4rem] transform object-scale-down transition-all duration-1000 rounded-xl shadow-lg shadow-blue-400 
            ${index === currentIndex && ` opacity-100 z-10 `}
            ${index === currentIndex - 1 && ` opacity-75 cursor-pointer `}
            ${index === currentIndex + 1 && ` opacity-75 cursor-pointer `}
            ${
              index !== currentIndex &&
              index !== currentIndex - 1 &&
              index !== currentIndex + 1
                ? ` opacity-0 invisible `
                : ""
            }
            `}
            onClick={() => {
              if (index < currentIndex) {
                handlePrevious();
              }
              if (index > currentIndex) {
                handleNext();
              }
            }}
            style={{
              transform: `translateX(${-133 * (currentIndex - 1)}%) 
              scale(${index === currentIndex ? 1.15 : 0.75})
              `,
            }}
          />
        );
      })}
    </div>
  );
}
