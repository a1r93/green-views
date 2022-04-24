import styled from 'styled-components';

interface ITeethContainerProps {
    translateX: number;
    reverse?: boolean;
}

export const TeethContainer = styled.div.attrs<ITeethContainerProps>(({ translateX, reverse }) => ({
    style: {
        transform: `translateX(${-40 + (reverse ? -translateX : translateX)}%) rotate(${reverse ? '-180' : '0'}deg)`,
    },
}))<ITeethContainerProps>`
    position: relative;
    z-index: -1;
    width: 200%;
    height: ${({ theme }) => theme.spacing([3])};
    background: ${({ theme }) => theme.palette.primary[500]};

    background-image: url(/images/tooth.png);
    background-position: 100% 0;
    background-size: contain;
    background-repeat: repeat-x;
`;
