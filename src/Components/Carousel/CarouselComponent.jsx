import { useState, useEffect, useCallback } from 'react';
import './CarouselComponent.css';

const loadImage = (module) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = module.default;
        img.onload = () => {
            resolve({
                src: module.default,
                alt: module.default.split('/').pop(),
                width: img.width,
                height: img.height
            });
        };
    });
};

const loadImages = async (imageModules) => {
    const imagePromises = Object.values(imageModules).map(module => module().then(loadImage));
    const imageArray = await Promise.all(imagePromises);
    const landscapeImages = imageArray.filter(img => img.width > img.height);
    return landscapeImages.sort(() => 0.5 - Math.random()).slice(0, 5);
};

export const CarouselComponent = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const imageModules = import.meta.glob('../../assets/*.{jpg,png,svg}');
        loadImages(imageModules).then(setImages);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalId);
    }, [nextSlide]);

    return (
        <div className="carousel">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                >
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
            <button className="carousel-control prev" onClick={prevSlide}>&lt;</button>
            <button className="carousel-control next" onClick={nextSlide}>&gt;</button>
        </div>
    );
};
