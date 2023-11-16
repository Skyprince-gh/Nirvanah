import React, { useState, useEffect } from 'react';

const Carousel = ({ images, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className={`relative w-full h-${height}`}>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
        <button className="bg-gray-300 p-2 rounded-full text-gray-700 mr-2" onClick={goToPrevSlide}>
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
        <button className="bg-gray-300 p-2 rounded-full text-gray-700 ml-2" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        {/* <img
          src={images[currentIndex]}
          
          className="w-full h-full object-cover"
          /> */}
        <Image
            fill
            src={images[currentIndex]}
            // src="/images/trumpet.jpeg"
            alt={`Slide ${currentIndex + 1}`}
            style={{ objectFit: "cover" }}
          />
      </div>
    </div>
  );
};

export default Carousel;
