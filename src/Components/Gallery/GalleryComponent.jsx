import { useEffect, useState } from 'react';
import "./Gallery.css";

export const GalleryComponent = () => {
    const [images, setImages] = useState([]);

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
            setImages(imageArray);
        });
    }, []);

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="gallery-item"
                    style={{
                        gridRowEnd: `span ${Math.ceil(image.height / image.width * 4)}` // Adjust row span based on aspect ratio
                    }}
                >
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    );
};
