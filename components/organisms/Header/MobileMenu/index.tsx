import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import Ids from '../../../../constants/ids';
import OutsideAlerter from '../../../molecules/OutsideAlerter';
import {
    Bar, Bar1, Bar3, Menu, MenuBackground, MenuBar, Navigation, NavigationLink
} from './style';

interface IMobileMenuProps {
    onClick: (id: Ids) => void;
    shouldDisplayShadow: boolean;
}

const MobileMenu = ({ onClick, shouldDisplayShadow }: IMobileMenuProps) => {
    const [shouldAppear, setShouldAppear] = useState(false);
    const { t } = useTranslation('header');

    const onLinkClick = (id: Ids) => {
        onClick(id);
        setShouldAppear(false);
    };

    return (
        <OutsideAlerter onOutsideClick={() => setShouldAppear(false)}>
            <Menu>
                <MenuBar onClick={() => setShouldAppear(!shouldAppear)}>
                    <Bar1 shouldDisplayShadow={shouldDisplayShadow} />
                    <Bar shouldDisplayShadow={shouldDisplayShadow} />
                    <Bar3 shouldDisplayShadow={shouldDisplayShadow} />
                </MenuBar>
            </Menu>

            <MenuBackground updateBackground={shouldAppear} shouldDisplayShadow={shouldDisplayShadow}>
                <Navigation>
                    <ul>
                        <li>
                            <NavigationLink
                                shouldDisplayShadow={shouldDisplayShadow}
                                onClick={() => onLinkClick(Ids.SERVICES)}
                            >
                                {t('services')}
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink
                                shouldDisplayShadow={shouldDisplayShadow}
                                onClick={() => onLinkClick(Ids.DESCRIPTION)}
                            >
                                {t('description')}
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink
                                shouldDisplayShadow={shouldDisplayShadow}
                                onClick={() => onLinkClick(Ids.GALLERY)}
                            >
                                {t('gallery')}
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink
                                shouldDisplayShadow={shouldDisplayShadow}
                                onClick={() => onLinkClick(Ids.CONTACT)}
                            >
                                {t('contact')}
                            </NavigationLink>
                        </li>
                    </ul>
                </Navigation>
            </MenuBackground>
        </OutsideAlerter>
    );
};

export default MobileMenu;
