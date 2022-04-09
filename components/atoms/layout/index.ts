import styled from 'styled-components';

interface ISpaced {
    margin?: number[];
    padding?: number[];
}

export const Spaced = styled('div')<ISpaced>`
    margin: ${({ theme, margin = [0] }) => theme.spacing(margin)};
    padding: ${({ theme, padding = [0] }) => theme.spacing(padding)};
`;

interface IFlexBox {
    justify?: string;
    align?: string;
    span?: number;
    inline?: boolean;
}

const Container = styled(Spaced)<IFlexBox>`
    justify-content: ${({ justify = 'initial' }) => justify};
    align-items: ${({ align = 'initial' }) => align};
    flex: ${({ span = 1 }) => span};
    display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
`;

export const Row = styled(Container)`
    display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
    flex-direction: row;
`;

export const Column = styled(Container)`
    height: 100%;
    display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
    flex-direction: column;
`;

interface IGrid {
    cols?: number | string;
    rows?: number | string;
    gap?: number;
}

const getTemplate = (gridItem: number | string) =>
    typeof gridItem === 'string' ? gridItem : `repeat(${gridItem}, 1fr)`;

export const Grid = styled(Container)<IGrid>`
    display: ${({ inline }) => (inline ? 'inline-grid' : 'grid')};
    grid-auto-flow: row dense;
    grid-gap: ${({ gap = 2, theme }) => theme.spacing([gap])};
    grid-auto-columns: 1fr;
    grid-template-columns: ${({ cols = 1 }) => getTemplate(cols)};
    grid-template-rows: ${({ rows = 1 }) => getTemplate(rows)};
    justify-items: ${({ justify = 'initial' }) => justify};
`;

export const LimitedWidthContainer = styled(Container)<{ maxWidth: number }>`
    display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
    max-width: ${({ maxWidth }) => maxWidth}px;
`;
