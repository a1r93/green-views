import { useTranslation } from 'next-i18next';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Ids from '../../constants/ids';
import { Column, Grid, Row } from '../atoms/layout';
import { Body1, Body4, Heading2 } from '../atoms/typography';
import {
    Circle, DescriptionContainer, DescriptionWrapper, ListWrapper, StyledImage, StyledLimitedWidth
} from './style';

const Description = () => {
    const { t } = useTranslation('description');

    return (
        <DescriptionContainer id={Ids.DESCRIPTION}>
            <StyledLimitedWidth maxWidth={1150} align="center" margin={[6, 0, 0]}>
                <Column>
                    <DescriptionWrapper>
                        <Heading2>{t('description-title')}</Heading2>
                        <Body4>{t('description-subtitle')}</Body4>
                    </DescriptionWrapper>
                    <ListWrapper align="flex-start">
                        <Grid align="center" cols="32px auto" gap={0}>
                            <Circle />
                            <Body1>{t('description-list-1')}</Body1>
                        </Grid>
                        <Grid align="center" cols="32px auto" gap={0}>
                            <Circle />
                            <Body1>{t('description-list-2')}</Body1>
                        </Grid>
                        <Grid align="center" cols="32px auto" gap={0}>
                            <Circle />
                            <Body1>{t('description-list-3')}</Body1>
                        </Grid>
                        <Grid align="center" cols="32px auto" gap={0}>
                            <Circle />
                            <Body1>{t('description-list-4')}</Body1>
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
};

export default Description;
