import { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = ({ images, heightClass }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={`relative ${heightClass}`}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          fill
          alt={`carousel-${index}`}
          // className={`absolute top-0 left-0 w-full h-full transition-opacity ${
          //   index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          // }`}
          style={{
            objectFit: "cover",
            zIndex: "-5",
            position: "absolute",
            top: "0px",
            left: "0px",
          }}
        />
      ))}
    </div>
  );
};

export default Carousel;
