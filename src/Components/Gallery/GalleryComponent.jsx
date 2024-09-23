import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Gallery.css';

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
                            alt: path.split('/').pop(),  // Get the file name
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
                    className={`gallery-item ${image.width > image.height ? 'landscape' : 'portrait'}`}
                    style={{
                        gridRowEnd: `span ${Math.ceil(image.height / image.width * 4)}`
                    }}
                >
                    <LazyLoadImage
                        src={image.src}
                        alt={image.alt}
                        effect="blur"
                        wrapperClassName="lazy-load-image-wrapper"
                    />
                    <div className="overlay">
                        <div className="title">{image.alt.split('.')[0]}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
