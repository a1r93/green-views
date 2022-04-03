import { useEffect, useState } from 'react';

import { useResizeListener } from '../../../../hooks';
import { drawPoints } from './drawPoints';

const useScrollAnimation = (id: string, shouldAnimate = false) => {
    const [nbHiddenPoints, setNbHiddenPoints] = useState(0);
    const [totalDrawnPoints, setTotalDrawnPoints] = useState(0);
    const { height } = useResizeListener();

    useEffect(() => {
        const onScroll = (event: Event) => {
            event.stopPropagation();
            event.preventDefault();

            var scrolled = document?.scrollingElement?.scrollTop || 0;

            // We have a vh of 150 in the parent container
            const remaining = height * 0.45;
            const currentPercentage = (scrolled / remaining) * 100;

            const currentHiddenPoints = (totalDrawnPoints * currentPercentage) / 100;
            setNbHiddenPoints(Math.floor(Math.min(totalDrawnPoints, currentHiddenPoints)));
        };

        if (shouldAnimate) {
            window.addEventListener('scroll', onScroll);
        }

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [height, setNbHiddenPoints, shouldAnimate, totalDrawnPoints]);

    useEffect(() => {
        if (shouldAnimate) {
            setTotalDrawnPoints(drawPoints(id));
        }
    }, [id, shouldAnimate, setTotalDrawnPoints]);

    useEffect(() => {
        if (shouldAnimate) {
            const svg = document.querySelector(`#${id}-svg`);
            const group = svg?.querySelector(`#${id}-group`);
            const circles = group?.querySelectorAll(`circle`);
            if (!circles) return;

            const sortedCircles = Array.from(circles)?.sort((a: SVGCircleElement, b: SVGCircleElement) => {
                const cy1 = a.getAttribute('cy');
                const cy2 = b.getAttribute('cy');
                if (!cy1 || !cy2) return 0;

                return parseInt(cy1, 10) - parseInt(cy2, 10);
            });

            for (let i = 0; i < nbHiddenPoints; i++) {
                sortedCircles[i]?.setAttribute('opacity', '0');
            }

            for (let i = nbHiddenPoints; i < sortedCircles.length; i++) {
                sortedCircles[i]?.setAttribute('opacity', '1');
            }
        }
    }, [nbHiddenPoints]);
};

export default useScrollAnimation;
