import "./gallery.scss";

import ChevronLeft from "../../assets/svg/chevron-left.svg?react";
import ChevronRight from "../../assets/svg/chevron-right.svg?react";
import { useRef } from "react";

export default function Gallery({ imgsData, touch = true }) {

    const galleryRef = useRef(null);

    const images = imgsData?.alts ?? [];
    const imagePath = imgsData?.link ?? "";

    const scrollGallery = (direction) => {
        const gallery = galleryRef.current;

        if (!gallery) return;

        const amount = gallery.clientWidth * 0.8;

        gallery.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    const handleWheel = (e) => {
        const gallery = galleryRef.current;

        if (!gallery) return;

        /*
         * Allow normal vertical scrolling to continue when
         * the user isn't actually scrolling horizontally.
         */
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) {
            return;
        }

        gallery.scrollLeft += e.deltaX;
    };

    if (!images.length) {
        return null;
    }

    return (
        <div className="gallery">

            <button
                type="button"
                className="gallery-control gallery-control-left"
                onClick={() => scrollGallery("left")}
                aria-label="Previous image"
            >
                <ChevronLeft />
            </button>

            <div
                ref={galleryRef}
                className={`gallery-cnt ${touch ? "touch" : ""}`}
                onWheel={handleWheel}
            >
                {images.map((alt, i) => (
                    <figure
                        className="image-cnt"
                        key={`${alt}-${i}`}
                    >
                        <img
                            src={`${imagePath}${i + 1}.png`}
                            alt={alt}
                            draggable="false"
                        />
                    </figure>
                ))}
            </div>

            <button
                type="button"
                className="gallery-control gallery-control-right"
                onClick={() => scrollGallery("right")}
                aria-label="Next image"
            >
                <ChevronRight />
            </button>

        </div>
    );
}