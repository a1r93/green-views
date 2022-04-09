import Ids from '../../constants/ids';
import Belgium from '../atoms/drawings/Belgium';
import { Body1, Heading2 } from '../atoms/typography';
import { SatisfactionContainer } from './style';

const Satisfaction = () => (
    <SatisfactionContainer justify="space-evenly" align="center" padding={[8, 3]} id={Ids.SATISFACTION}>
        <Heading2>Des clients satisfaits partout en belgique</Heading2>
        <Belgium />
        <Body1>Vous aussi vous avez droit à un jardin exceptionnel</Body1>
    </SatisfactionContainer>
);

export default Satisfaction;
