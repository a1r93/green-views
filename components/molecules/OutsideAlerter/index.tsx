import React, { useEffect, useRef } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>, onOutsideClick: () => void) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        const handleClickOutside = (event: any) => {
            if (!ref) return;
            if (ref.current && !ref.current.contains(event.target)) {
                onOutsideClick();
            }
        };
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onOutsideClick]);
}

interface IOutsideAlerterProps {
    children: React.ReactNode;
    onOutsideClick: () => void;
}

const OutsideAlerter = (props: IOutsideAlerterProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutsideAlerter(wrapperRef, props.onOutsideClick);

    return <div ref={wrapperRef}>{props.children}</div>;
};

export default OutsideAlerter;
