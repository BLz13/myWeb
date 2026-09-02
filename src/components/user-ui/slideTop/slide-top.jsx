import "./slide-top.scss";

import { useEffect, useState } from "react";

import ChevronUp from "../../../assets/svg/chevron-up.svg?react";
import { useUIState } from "../../../hooks/context/useUIState";

export default function SlideTop() {
    
    const { scrollToSection } = useUIState();

    const [isStartVisible, setIsStartVisible] = useState(true);

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
            onClick={ () => scrollToSection("start")}
            onTouchEnd={ () => scrollToSection("start")}
        >
            <ChevronUp />
            <ChevronUp />
            <ChevronUp />
        </a>
    );
}