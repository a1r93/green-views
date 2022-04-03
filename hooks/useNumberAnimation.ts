import { useEffect, useState } from 'react';

const animateValue = (start: number, end: number, duration: number, onUpdate: (value: number) => void) => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const valueToSet = Math.floor(progress * (end - start) + start);
        onUpdate(isNaN(valueToSet) ? 0 : valueToSet);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
};

const useNumberAnimation = (value: number) => {
    const [animatedValue, setInnerValue] = useState(value);

    useEffect(() => {
        animateValue(animatedValue, value, 200, setInnerValue);
    }, [value]);

    return animatedValue;
};

export default useNumberAnimation;
