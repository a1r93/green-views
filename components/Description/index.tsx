import { AnimationOnScroll } from 'react-animation-on-scroll';

import Ids from '../../constants/ids';
import { Column, Grid, Row } from '../atoms/layout';
import { Body1, Body4, Heading2 } from '../atoms/typography';
import {
    Circle, DescriptionContainer, DescriptionWrapper, ListWrapper, StyledImage, StyledLimitedWidth
} from './style';

const Description = () => (
    <DescriptionContainer>
        <StyledLimitedWidth maxWidth={1150} align="center" margin={[6, 0, 0]} id={Ids.DESCRIPTION}>
            <Column>
                <DescriptionWrapper>
                    <Heading2>Laissez vous aider par des professionnels</Heading2>
                    <Body4>
                        Green Views existe depuis plus de 5 ans, ce qui nous a permis de devenir de réels experts, aussi
                        bien sur le terrain qu’en dehors. C’est pourquoi nous vous proposons :
                    </Body4>
                </DescriptionWrapper>
                <ListWrapper align="flex-start">
                    <Grid align="center" cols="32px auto" gap={0}>
                        <Circle />
                        <Body1>Un déplacement à domicile pour écouter vos attentes</Body1>
                    </Grid>
                    <Grid align="center" cols="32px auto" gap={0}>
                        <Circle />
                        <Body1>Un devis 100% gratuit adapté à vos besoins</Body1>
                    </Grid>
                    <Grid align="center" cols="32px auto" gap={0}>
                        <Circle />
                        <Body1>Une réponse rapide à vos questions</Body1>
                    </Grid>
                    <Grid align="center" cols="32px auto" gap={0}>
                        <Circle />
                        <Body1>Une disponnibilité de 7 jours sur 7</Body1>
                    </Grid>
                </ListWrapper>
            </Column>

            <AnimationOnScroll animateIn="animate__fadeIn" duration={1} animateOnce>
                <Row align="center" justify="center">
                    <StyledImage src="/images/description_image.png" />
                </Row>
            </AnimationOnScroll>
        </StyledLimitedWidth>
    </DescriptionContainer>
);

export default Description;
