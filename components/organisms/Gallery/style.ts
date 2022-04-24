import styled from 'styled-components';

import { Column } from '../../atoms/layout';
import { HEADER_SIZE, HEADER_SIZE_SMALL } from '../Header/style';

export const GalleryContainer = styled(Column)<{ shouldShowAll: boolean }>`
    position: relative;
    overflow: hidden;
    margin-bottom: ${({ theme }) => theme.spacing([8])};

    ${({ shouldShowAll }) => (shouldShowAll ? `` : `max-height: calc(100vh - ${HEADER_SIZE}px);`)}

    & h2,
    span {
        color: ${({ theme }) => theme.palette.white};
        text-align: center;
    }

    & h2 {
        margin-bottom: ${({ theme }) => theme.spacing([0.5])};
    }

    & .animate__animated {
        min-width: 212px;
        max-width: 400px;
        width: 35%;
    }

    & svg {
        height: auto;
        width: 100%;
    }

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        max-height: calc(100vh - ${HEADER_SIZE_SMALL}px);
    }
`;

export const GalleryWrapper = styled.div`
    width: 100%;
    max-width: 1150px;
    margin-top: ${({ theme }) => theme.spacing([5])};

    img {
        border-radius: 4px;
    }
`;

export const Fade = styled.div`
    position: absolute;
    bottom: 0px;

    display: block;

    width: 100%;
    height: 100px;
    cursor: pointer;

    background-image: linear-gradient(to bottom, rgba(78, 156, 129, 0), rgba(78, 156, 129, 1) 100%);
`;
