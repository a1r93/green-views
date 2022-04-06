import { useEffect, useState } from 'react';

import { useResizeListener } from '../../../hooks';
import { AnimatedLeaf, LeavesContainer, LeavesWrapper } from './style';

const BASE_ROTATION_1 = -54;
const BASE_ROTATION_2 = 26;
const BASE_ROTATION_3 = 34;
const BASE_ROTATION_4 = -26;

const BASE_SCALE = 1;

const Leaves = () => {
    const [rotation1, setRotation1] = useState(BASE_ROTATION_1);
    const [rotation2, setRotation2] = useState(BASE_ROTATION_2);
    const [rotation3, setRotation3] = useState(BASE_ROTATION_3);
    const [rotation4, setRotation4] = useState(BASE_ROTATION_4);
    const [scale, setScale] = useState(BASE_SCALE);
    const [leavesWidth, setLeavesWidth] = useState(100);
    const [leavesHeight, setLeavesHeight] = useState(100);
    const [opacity, setOpacity] = useState(1);
    const { height, width } = useResizeListener();

    useEffect(() => {
        const onScroll = (event: Event) => {
            event.stopPropagation();
            event.preventDefault();

            var scrolled = document?.scrollingElement?.scrollTop || 0;
            if (scrolled > height * 1.5) return;

            // We have a vh of 150 in the parent container
            const remaining = height * 0.45;
            const currentPercentage = remaining === 0 ? 0 : scrolled / remaining;

            const addition = 90 * currentPercentage;
            const newRotation1 = BASE_ROTATION_1 + addition;
            const newRotation2 = BASE_ROTATION_2 - addition;
            const newRotation3 = BASE_ROTATION_3 + addition;
            const newRotation4 = BASE_ROTATION_4 - addition;
            setRotation1(newRotation1);
            setRotation2(newRotation2);
            setRotation3(newRotation3);
            setRotation4(newRotation4);

            const scaleAddition = 0.35 * currentPercentage;
            setScale(BASE_SCALE + scaleAddition);

            setLeavesWidth(100 - 40 * currentPercentage);
            setLeavesHeight(100 - 40 * currentPercentage);
            setOpacity(1 - currentPercentage / 3);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [
        height,
        width,
        setRotation1,
        setRotation2,
        setRotation3,
        setRotation4,
        setScale,
        setLeavesWidth,
        setLeavesHeight,
        setOpacity,
    ]);

    return (
        <LeavesContainer>
            <LeavesWrapper width={leavesWidth} height={leavesHeight}>
                <AnimatedLeaf rotation={rotation1} scale={scale} opacity={opacity} top={24} left={16} />
                <AnimatedLeaf rotation={rotation2} scale={scale} opacity={opacity} top={34} left={78} />
                <AnimatedLeaf rotation={rotation3} scale={scale} opacity={opacity} top={62} left={12} />
                <AnimatedLeaf rotation={rotation4} scale={scale} opacity={opacity} top={70} left={69} />
            </LeavesWrapper>
        </LeavesContainer>
    );
};

export default Leaves;
