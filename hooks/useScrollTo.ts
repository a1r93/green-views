import { HEADER_SIZE, HEADER_SIZE_SMALL } from '../components/organisms/Header/style';
import Ids from '../constants/ids';
import useResizeListener from './useResizeListener';

const useScrollTo = () => {
    const { width } = useResizeListener();

    const getOffsetById = (id: Ids, defaultOffset: number) => {
        if (id === Ids.DESCRIPTION) return 0;
        if (id === Ids.GALLERY) return defaultOffset + 40;

        return defaultOffset;
    };

    const scrollTo = (id: Ids) => {
        const element = document.getElementById(id);
        if (!element) return;

        const scrollOffset = width >= 600 ? HEADER_SIZE_SMALL : HEADER_SIZE;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - getOffsetById(id, scrollOffset);

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };

    return scrollTo;
};

export default useScrollTo;
