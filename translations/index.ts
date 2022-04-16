import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { ChangeEvent } from 'react';
import { initReactI18next } from 'react-i18next';

import en from './en';
import fr from './fr';
import nl from './nl';

i18n.use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        supportedLngs: ['en', 'fr', 'nl'],
        defaultNS: 'commons',
        fallbackLng: 'fr',
        resources: {
            en,
            fr,
            nl,
        },
    });

export const updateLanguage = async (event: ChangeEvent<HTMLSelectElement>): Promise<void> => {
    const nextLanguage = event.target.value;
    await i18n.changeLanguage(nextLanguage);
};

export default i18n;
