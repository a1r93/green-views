import styled from 'styled-components';

import { Column } from '../atoms/layout';

export const SatisfactionContainer = styled(Column)`
    position: relative;
    max-height: 100vh;
    overflow: hidden;
    margin-bottom: ${({ theme }) => theme.spacing([8])};

    & h2,
    span {
        color: ${({ theme }) => theme.palette.white};
        text-align: center;
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
`;

export const SatisfactionWrapper = styled.div`
    width: 100%;
    max-width: 1150px;
    margin-top: ${({ theme }) => theme.spacing([6])};

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

    background-image: linear-gradient(to bottom, rgba(78, 156, 129, 0), rgba(78, 156, 129, 1) 100%);
`;
