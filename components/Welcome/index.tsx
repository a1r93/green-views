import Button from '../atoms/Button';
import LeafIcon from '../atoms/icons/leaf';
import { Body1, Heading1 } from '../atoms/typography';
import {
    Leaf1, Leaf2, Leaf3, Leaf4, LeavesContainer, LeavesWrapper, WelcomeContainer
} from './style';

const Welcome = () => (
    <WelcomeContainer justify="center" align="center">
        <Heading1>
            Bienvenue chez
            <br /> Green Views
        </Heading1>
        <Body1>Société d'entreprenariat de jardin</Body1>
        <Button color="secondary">Découvrir</Button>
        <LeavesContainer>
            <LeavesWrapper>
                <Leaf1 />
                <Leaf2 />
                <Leaf3 />
                <Leaf4 />
            </LeavesWrapper>
        </LeavesContainer>
    </WelcomeContainer>
);

export default Welcome;
