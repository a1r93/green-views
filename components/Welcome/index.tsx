import { useTranslation } from 'next-i18next';

import Ids from '../../constants/ids';
import { useResizeListener } from '../../hooks';
import Button from '../atoms/Button';
import { Body1, Heading1 } from '../atoms/typography';
import { HEADER_SIZE, HEADER_SIZE_SMALL } from '../Header/style';
import Leaves from './Leaves';
import { WelcomeContainer, WelcomeWrapper } from './style';

const Welcome = () => {
    const { width } = useResizeListener();
    const { t } = useTranslation('welcome');

    const onDiscoverClick = () => {
        const element = document.getElementById(Ids.SERVICES);
        if (!element) return;

        const scrollOffset = width >= 600 ? HEADER_SIZE_SMALL : HEADER_SIZE;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - scrollOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };

    return (
        <WelcomeContainer id={Ids.WELCOME}>
            <WelcomeWrapper justify="center" align="center">
                <Heading1>
                    {t('welcome')}
                    <br /> Green Views
                </Heading1>
                <Body1>{t('welcome-subtitle')}</Body1>
                <Button color="secondary" onClick={onDiscoverClick}>
                    {t('discover')}
                </Button>
                <Leaves />
            </WelcomeWrapper>
        </WelcomeContainer>
    );
};

export default Welcome;
