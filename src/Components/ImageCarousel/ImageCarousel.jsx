import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images, title, autoPlayInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // If images is a string (single image), convert to array
    const imageArray = Array.isArray(images) ? images : images ? [images] : [];

    useEffect(() => {
        if (imageArray.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [imageArray.length, autoPlayInterval]);

    if (imageArray.length === 0) {
        return (
            <div className="w-full h-40 lg:h-full rounded-3xl bg-gray-800 flex items-center justify-center">
                <p className="text-gray-500">No image available</p>
            </div>
        );
    }

    if (imageArray.length === 1) {
        return (
            <img 
                src={imageArray[0]} 
                alt={title} 
                className="w-full h-40 lg:h-full rounded-3xl object-cover" 
            />
        );
    }

    return (
        <div className="relative w-full h-40 lg:h-full rounded-3xl overflow-hidden">
            {/* Images */}
            <div className="relative w-full h-full">
                {imageArray.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={image}
                            alt={`${title} - Image ${index + 1}`}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                ))}
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {imageArray.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                            index === currentIndex
                                ? 'w-8 bg-white'
                                : 'w-2 bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;

