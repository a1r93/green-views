import Button from '../atoms/Button';
import { Body1, Heading1 } from '../atoms/typography';
import Leaves from './Leaves';
import { WelcomeContainer, WelcomeWrapper } from './style';

const Welcome = () => {
    return (
        <WelcomeContainer>
            <WelcomeWrapper justify="center" align="center">
                <Heading1>
                    Bienvenue chez
                    <br /> Green Views
                </Heading1>
                <Body1>Société d'entreprenariat de jardin</Body1>
                <Button color="secondary">Découvrir</Button>
                <Leaves />
            </WelcomeWrapper>
        </WelcomeContainer>
    );
};

export default Welcome;
