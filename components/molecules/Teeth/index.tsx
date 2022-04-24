import { useEffect, useState } from 'react';

import { useResizeListener } from '../../../hooks';
import { TeethContainer } from './style';

interface ITeethProps {
    reverse?: boolean;
}

const Teeth = ({ reverse }: ITeethProps) => {
    const [pageHeight, setPageHeight] = useState(0);
    const [translateX, setTransformX] = useState(0);
    const { width, height } = useResizeListener();

    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight,
        );
        setPageHeight(height);
    }, [width, height]);

    useEffect(() => {
        const onScroll = (event: Event) => {
            event.stopPropagation();
            event.preventDefault();

            const scrolled = document?.scrollingElement?.scrollTop || 0;
            const remaining = pageHeight - height - scrolled;
            const percentage = remaining / pageHeight;
            const result = percentage * 30;
            setTransformX(isFinite(result) ? result : 0);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [height, pageHeight]);

    return <TeethContainer reverse={reverse} translateX={translateX} />;
};

export default Teeth;
