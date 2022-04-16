import { useTranslation } from 'react-i18next';

import Ids from '../../constants/ids';
import Button from '../atoms/Button';
import { Body1, Heading1 } from '../atoms/typography';
import Leaves from './Leaves';
import { WelcomeContainer, WelcomeWrapper } from './style';

const Welcome = () => {
    const { t } = useTranslation('welcome');

    return (
        <WelcomeContainer id={Ids.WELCOME}>
            <WelcomeWrapper justify="center" align="center">
                <Heading1>
                    {t('welcome')}
                    <br /> Green Views
                </Heading1>
                <Body1>{t('welcome-subtitle')}</Body1>
                <Button color="secondary">{t('discover')}</Button>
                <Leaves />
            </WelcomeWrapper>
        </WelcomeContainer>
    );
};

export default Welcome;
