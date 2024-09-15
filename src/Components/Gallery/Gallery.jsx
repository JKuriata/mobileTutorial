import "./Gallery.css";
import Sebastian from "../../assets/Sebastian.jpg";
import Roth from "../../assets/Roth.jpg"

export const Gallery = () => {
    // Declare the data array before the return statement
    const data = [
        {
            id: 1, // Use a unique id for each image
            imgSrc: Sebastian
        },
        {
            id:2,
            imgSrc: Roth
        }
    ];

    return (
        <div className="gallery">
            {data.map((item) => (
                <div key={item.id} className="gallery-item">
                    <img src={item.imgSrc} alt={`Image ${item.id}`} />
                </div>
            ))}
        </div>
    );
};
