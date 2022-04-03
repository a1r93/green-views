import { Column } from '../../atoms/layout';
import { Body1, Heading3 } from '../../atoms/typography';
import Sprinkler from '../../drawings/Sprinkler';
import OutlinedNumber from '../../OutlinedNumber';
import {
    DescriptionWrapper, ServiceContainer, ServiceContent, ServiceNumberWrapper
} from './style';

interface ISingleServiceProps {
    title: string;
    description: string;
    index: number;
    drawing: JSX.Element;
}

const SingleService = ({ drawing, description, index, title }: ISingleServiceProps) => (
    <Column>
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

        <Column justify="center" align="center" margin={[3, 0, 5]}>
            {drawing}
        </Column>
    </Column>
);

export default SingleService;
