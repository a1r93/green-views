import {
    active, bindEvents, createViewer, lockBody, setSourceDimensions, setTarget
} from './viewer';

let image: HTMLImageElement;

const init = (element: HTMLImageElement) => {
    const imageSource = element.getAttribute('data-image') || element.src;

    // Clear old onload message
    if (image) {
        image.onload = null;
    }

    image = new Image();
    image.onload = function () {
        setSourceDimensions(image.width, image.height); // Save original dimensions for later.
        setTarget(this as HTMLImageElement);
        createViewer();
        lockBody();
        bindEvents();
    };

    image.src = imageSource;
};

const track = (element: HTMLImageElement) => {
    // Element needs a src at minimum.
    if (element.getAttribute('data-image') || element.src) {
        element.addEventListener(
            'click',
            function (e) {
                if (element.tagName === 'A') {
                    e.preventDefault();
                }
                if (!active) {
                    init(this);
                }
            },
            false,
        );
    }
};

const startTracking = (passedElements: HTMLImageElement | HTMLCollectionOf<HTMLImageElement>) => {
    let i;

    // If passed an array of elements, assign tracking to all.
    if ((passedElements as HTMLCollectionOf<HTMLImageElement>).length) {
        // Loop and assign
        for (i = 0; i < (passedElements as HTMLCollectionOf<HTMLImageElement>).length; i++) {
            track((passedElements as HTMLCollectionOf<HTMLImageElement>)[i]);
        }
    } else {
        track(passedElements as HTMLImageElement);
    }
};

const main = (element: HTMLImageElement | HTMLCollectionOf<HTMLImageElement>) => {
    // Parse arguments
    if (!element) {
        throw 'You need to pass an element!';
    }

    startTracking(element);
};

export default main;
