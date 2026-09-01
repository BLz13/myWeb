import "./gallery.scss";

import { useState } from "react";

export default function Gallery({ imgsData, expanded = true }) {

    const allImages = imgsData?.alts ?? [];
    const images = expanded ? allImages : allImages.slice(0, 1);
    const imagePath = imgsData?.link ?? "";

    const [orientations, setOrientations] = useState({});

    const handleImageLoad = (index, event) => {
        const { naturalWidth, naturalHeight } = event.target;
        const orientation = naturalWidth >= naturalHeight ? "horizontal" : "portrait";

        setOrientations((prev) => {
            if (prev[index] === orientation) return prev; // evita un re-render innecesario
            return { ...prev, [index]: orientation };
        });
    };

    if (!images.length) {
        return null;
    }

    return (
        <div className="gallery">
            <div className="gallery-cnt">
                {images.map((alt, i) => (
                    <span
                        className={`image-cnt ${orientations[i] ?? ""}`}
                        key={i}
                    >
                        <img
                            src={`${imagePath}${i + 1}.png`}
                            alt={alt}
                            onLoad={(e) => handleImageLoad(i, e)}
                        />
                    </span>
                ))}
            </div>
        </div>
    );
}