import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useResizeListener } from '../../../hooks';

interface ITeethProps {
    reverse?: boolean;
}

const TeethContainer = styled.div<ITeethProps & { translateX: number }>`
    position: relative;
    z-index: -1;
    width: 200%;
    height: ${({ theme }) => theme.spacing([3])};
    background: ${({ theme }) => theme.palette.primary[500]};

    background-image: url(/images/tooth.png);
    background-position: 100% 0;
    background-size: contain;
    background-repeat: repeat-x;

    transform: ${({ reverse, translateX }) => `
        translateX(${-40 + (reverse ? -translateX : translateX)}%)
        rotate(${reverse ? '-180' : '0'}deg)
    `};
`;

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
