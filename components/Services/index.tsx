import { useTranslation } from 'next-i18next';

import Ids from '../../constants/ids';
import { Body2, Heading2 } from '../atoms/typography';
import SingleService from './SingleService';
import {
    ServicesContainer, ServicesWrapper, StyledGrassLawner, StyledPruner, StyledSprinkler,
    StyledWheelBarrower, TitleWrapper
} from './style';

const Services = () => {
    const { t } = useTranslation('services');

    return (
        <ServicesContainer align="center" padding={[8, 2]} id={Ids.SERVICES}>
            <ServicesWrapper align="center">
                <TitleWrapper>
                    <Heading2>{t('services')}</Heading2>
                    <Body2>{t('services-subtitle')}</Body2>
                </TitleWrapper>

                <SingleService
                    title={t('services-title-1')}
                    description={t('services-description-1')}
                    index={1}
                    drawing={<StyledGrassLawner color="primary" />}
                />

                <SingleService
                    title={t('services-title-2')}
                    description={t('services-description-2')}
                    index={2}
                    drawing={<StyledWheelBarrower color="primary" />}
                />

                <SingleService
                    title={t('services-title-3')}
                    description={t('services-description-3')}
                    index={3}
                    drawing={<StyledSprinkler color="primary" />}
                />

                <SingleService
                    title={t('services-title-4')}
                    description={t('services-description-4')}
                    index={4}
                    drawing={<StyledPruner color="primary" />}
                />
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
