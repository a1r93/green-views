import { AnimationOnScroll } from 'react-animation-on-scroll';

import { Column } from '../../atoms/layout';
import { Body1, Heading3 } from '../../atoms/typography';
import OutlinedNumber from '../../OutlinedNumber';
import {
    DescriptionWrapper, ServiceContainer, ServiceContent, ServiceNumberWrapper, ServiceWrapper
} from './style';

interface ISingleServiceProps {
    title: string;
    description: string;
    index: number;
    drawing: JSX.Element;
}

const SingleService = ({ drawing, description, index, title }: ISingleServiceProps) => (
    <AnimationOnScroll
        animateIn="animate__slideInUp"
        duration={0.6}
        style={{ width: '100%', height: '100%' }}
        animateOnce
    >
        <ServiceWrapper revert={index % 2 === 0}>
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
        </ServiceWrapper>
    </AnimationOnScroll>
);

export default SingleService;
