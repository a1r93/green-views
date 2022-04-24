import styled from 'styled-components';

interface IOutlinedNumberProps {
    value: number;
}

const StyledSvg = styled.svg`
    width: 180px;
    height: 440px;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        width: 90px;
        height: 220px;
        flex-direction: column;
    }
`;

const OutlinedNumber = ({ value }: IOutlinedNumberProps) => (
    <StyledSvg width="90" height="220" viewBox="0 0 45 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text
            stroke="#C6E4D5"
            fontSize="100"
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Oswald-bold"
        >
            {value}
        </text>
    </StyledSvg>
);

export default OutlinedNumber;
