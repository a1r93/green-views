import { useEffect, useState } from 'react';

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const useResizeListener = () => {
    // save current window width in the state object
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setWidth(getWidth());
            setHeight(getHeight());
        }, 100);
    }, []);

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
        const resizeListener = () => {
            setWidth(getWidth());
            setHeight(getHeight());
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    return { height, width };
};

export default useResizeListener;
