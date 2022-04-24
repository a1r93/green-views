import { useTranslation } from 'next-i18next';

import Ids from '../../../constants/ids';
import useScrollTo from '../../../hooks/useScrollTo';
import { Body1, Heading1 } from '../../atoms/typography';
import Button from '../../molecules/Button';
import Leaves from './Leaves';
import { WelcomeContainer, WelcomeWrapper } from './style';

const Welcome = () => {
    const { t } = useTranslation('welcome');
    const scrollTo = useScrollTo();

    const onDiscoverClick = () => {
        scrollTo(Ids.SERVICES);
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
