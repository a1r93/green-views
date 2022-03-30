import { DefaultTheme } from 'styled-components';

import breakpoints from './breakpoints';
import palette from './palette';

const inlineTheme: DefaultTheme = {
    palette,
    breakpoints,
    transitionDuration: 200,
    radius: 50,
    ovalRadius: 5,
    spacing: (value: number[]) => value.map((current: number) => `${current * 8}px`).join(' '),
};

export default inlineTheme;
