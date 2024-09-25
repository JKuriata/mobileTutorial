import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Gallery.css';

const loadImage = (module, path) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = module.default;
        img.onload = () => {
            resolve({
                src: module.default,
                alt: path.split('/').pop(),
                width: img.width,
                height: img.height
            });
        };
    });
};

const loadImages = async (imageModules) => {
    const imagePromises = Object.entries(imageModules).map(([path, module]) => 
        module().then(m => loadImage(m, path))
    );
    return Promise.all(imagePromises);
};

export const GalleryComponent = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const imageModules = import.meta.glob('../../assets/*.{jpg,png,svg}');
        loadImages(imageModules).then(setImages);
    }, []);

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <GalleryItem key={index} image={image} />
            ))}
        </div>
    );
};

const GalleryItem = ({ image }) => (
    <div
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
            width="100%"
            height="100%"
        />
        <div className="overlay">
            <div className="title">{image.alt.split('.')[0]}</div>
        </div>
    </div>
);
