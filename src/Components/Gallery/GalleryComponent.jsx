import { useEffect, useState } from 'react';
import "./Gallery.css";

export const GalleryComponent = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Use import.meta.glob to import all images from a directory
        const imageModules = import.meta.glob('../../assets/*.{jpg,png,svg}');

        // Extract the paths and create an array of promises to import each image
        const imagePromises = Object.keys(imageModules).map((path) =>
            imageModules[path]().then((module) => ({
                src: module.default,
                alt: path.split('/').pop() // Extract filename for alt text
            }))
        );

        // Resolve all image imports and update state
        Promise.all(imagePromises).then((imageArray) => {
            setImages(imageArray);
        });
    }, []);

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    );
};
