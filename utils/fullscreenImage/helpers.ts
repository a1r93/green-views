import { IDimensions } from './types';

// Returns whether target a vertical or horizontal fit in the page.
// As well as the right fitting width/height of the image.
export const getFit = (source: IDimensions) => {
    const heightRatio = window.innerHeight / source.h;
    if (source.w * heightRatio > window.innerWidth) {
        const widthRatio = window.innerWidth / source.w;
        return {
            w: source.w * widthRatio * 0.95,
            h: source.h * widthRatio,
            fit: true,
        };
    } else {
        return {
            h: source.h * heightRatio * 0.95,
            w: source.w * heightRatio,
            fit: true,
        };
    }
};

// Applies a dict of css properties to an element
export const applyProperties = (container: HTMLElement, properties: Record<string, string>) => {
    for (const key in properties) {
        container.style[key as any] = properties[key];
    }
};
