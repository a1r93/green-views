interface IColorVariants {
    50?: string;
    100?: string;
    300?: string;
    500?: string;
    700?: string;
    900?: string;
}

export interface IPalette {
    primary: IColorVariants;
    secondary: IColorVariants;
    tertiary: IColorVariants;
    white: string;
}

export interface IBreakpoints {
    forPhoneOnly: string;
    forTabletPortraitUp: string;
    forTabletLandscapeUp: string;
    forDesktopUp: string;
    forBigDesktopUp: string;
}

export type TPaletteColors = keyof IPalette;

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: IPalette;
        breakpoints: IBreakpoints;
        shadows: string[];
        transitionDuration: number;
        radius: number;
        ovalRadius: number;
        spacing: (value: number[]) => string;
    }

    export interface Themes {
        grid: DefaultTheme;
        inline: DefaultTheme;
    }

    export type Theme = keyof Themes;
}
