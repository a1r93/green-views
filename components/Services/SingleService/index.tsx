import { Body1, Heading2, Heading3 } from '../../atoms/typography';
import OutlinedNumber from '../../OutlinedNumber';
import {
    DescriptionWrapper, ServiceContainer, ServiceContent, ServiceNumberWrapper
} from './style';

interface ISingleServiceProps {
    title: string;
    description: string;
    index: number;
}

const SingleService = ({ description, index, title }: ISingleServiceProps) => (
    <ServiceContainer>
        <ServiceContent justify="center" margin={[8, 0, 0]}>
            <Heading3>{title}</Heading3>
            <DescriptionWrapper justify="center">
                <Body1>{description}</Body1>
            </DescriptionWrapper>
        </ServiceContent>
        <ServiceNumberWrapper>
            <OutlinedNumber value={index} />
        </ServiceNumberWrapper>
    </ServiceContainer>
);

export default SingleService;
