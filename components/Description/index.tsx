import { Grid, Row } from '../atoms/layout';
import { Body1, Body4, Heading2 } from '../atoms/typography';
import { Circle, DescriptionContainer, DescriptionWrapper, ListWrapper } from './style';

const Description = () => (
    <DescriptionContainer>
        <DescriptionWrapper margin={[8, 0, 0]}>
            <Heading2>Laissez vous aider par des professionnels</Heading2>
            <Body4>
                Green Views existe depuis plus de 5 ans, ce qui nous a permis de devenir de réels experts, aussi bien
                sur le terrain qu’en dehors. C’est pourquoi nous vous proposons :
            </Body4>
        </DescriptionWrapper>
        <ListWrapper align="flex-start">
            <Grid align="center" cols="40px auto" gap={0}>
                <Circle />
                <Body1>Un déplacement à domicile pour écouter vos attentes</Body1>
            </Grid>
            <Grid align="center" cols="40px auto" gap={0}>
                <Circle />
                <Body1>Un devis 100% gratuit adapté à vos besoins</Body1>
            </Grid>
            <Grid align="center" cols="40px auto" gap={0}>
                <Circle />
                <Body1>Une réponse rapide à vos questions</Body1>
            </Grid>
            <Grid align="center" cols="40px auto" gap={0}>
                <Circle />
                <Body1>Une disponnibilité de 7 jours sur 7</Body1>
            </Grid>
        </ListWrapper>
    </DescriptionContainer>
);

export default Description;
