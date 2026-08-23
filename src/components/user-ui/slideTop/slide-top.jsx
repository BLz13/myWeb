import "./slide-top.scss";

import { useEffect, useState } from "react";

import ChevronUp from "../../../assets/svg/chevron-up.svg?react";

export default function SlideTop() {

    const [isStartVisible, setIsStartVisible] = useState(true);

    const handleTouch = () => {
        document.getElementById("root")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {

        const startEl = document.getElementById("start");

        if (!startEl) return;

        let observer;

        const startObserving = () => {
            observer = new IntersectionObserver(
                ([entry]) => {
                    setIsStartVisible(entry.isIntersecting);
                },
                { threshold: 0 }
            );
            observer.observe(startEl);
        };

        const fallbackTimer = setTimeout(() => {
            if (!observer) startObserving();
        }, 800);

        return () => {
            clearTimeout(fallbackTimer);
            observer?.disconnect();
        };
        
    }, []);

    return (
        <a
            className={`slide-up ${isStartVisible ? "hide" : "show"}`}
            onClick={handleTouch}
            onTouchEnd={handleTouch}
        >
            <ChevronUp />
            <ChevronUp />
            <ChevronUp />
        </a>
    );
}