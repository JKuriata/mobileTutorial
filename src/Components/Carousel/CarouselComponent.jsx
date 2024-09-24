import { useState, useEffect } from 'react';
import './CarouselComponent.css';

export const CarouselComponent = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const imageModules = import.meta.glob('../../assets/*.{jpg,png,svg}');

        const imagePromises = Object.keys(imageModules).map((path) =>
            imageModules[path]().then((module) => {
                const img = new Image();
                img.src = module.default;
                return new Promise((resolve) => {
                    img.onload = () => {
                        resolve({
                            src: module.default,
                            alt: path.split('/').pop(),
                            width: img.width,
                            height: img.height
                        });
                    };
                });
            })
        );

        Promise.all(imagePromises).then((imageArray) => {
            const landscapeImages = imageArray.filter(img => img.width > img.height);
            const randomImages = landscapeImages.sort(() => 0.5 - Math.random()).slice(0, 5);
            setImages(randomImages);
        });
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

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
