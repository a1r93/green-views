import { applyProperties, getFit } from './helpers';
import { IDimensions } from './types';

let overflowValue: string;
let sourceDimensions: IDimensions;
let target: HTMLImageElement;
let container: HTMLElement;
export let active = false;

export const setSourceDimensions = (w: number, h: number) => {
    sourceDimensions = { w, h };
};

export const setTarget = (element: HTMLImageElement) => {
    target = element;
};
export const setIsActive = (value: boolean) => {
    active = value;
};

const setDimensions = () => {
    // Manually set height to stop bug where
    const imageDimensions = getFit(sourceDimensions);
    target.width = imageDimensions.w;
    target.height = imageDimensions.h;
};

export const createViewer = () => {
    const containerProperties = {
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: '0px',
        left: '0px',
        overflow: 'hidden',
        zIndex: '999999',
        margin: '0px',
        webkitTransition: 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
        MozTransition: 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
        transition: 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
        webkitBackfaceVisibility: 'hidden',
        opacity: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    container = document.createElement('figure');
    container.appendChild(target);
    applyProperties(container, containerProperties);

    setDimensions();

    document.body.appendChild(container);
    setTimeout(function () {
        container.style.opacity = '1';
    }, 10);
};

export const bindEvents = () => {
    window.addEventListener('resize', setDimensions, false);
    window.addEventListener('keyup', onKeyUp, false);
    window.addEventListener('click', removeViewer, false);
};

const unbindEvents = () => {
    window.removeEventListener('resize', setDimensions, false);
    window.removeEventListener('keyup', onKeyUp, false);
    window.removeEventListener('click', removeViewer, false);
};

// Exit on excape key pressed;
const onKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();
    if (event.key === 'Escape') {
        removeViewer();
    }
};

// Lock scroll on the document body.
export const lockBody = () => {
    overflowValue = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
};

// Unlock scroll on the document body.
const unlockBody = () => {
    document.body.style.overflow = overflowValue;
};

const removeViewer = () => {
    unlockBody();
    unbindEvents();
    stop();
    document.body.removeChild(container);
    setIsActive(false);
};
