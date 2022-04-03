import { Body1, Heading2, Heading3 } from '../atoms/typography';
import OutlinedNumber from '../OutlinedNumber';
import SingleService from './SingleService';
import {
    DescriptionWrapper, ServiceContainer, ServiceContent, ServiceNumberWrapper, ServicesContainer,
    ServicesWrapper
} from './style';

const Services = () => (
    <ServicesContainer align="center" padding={[8, 2]}>
        <ServicesWrapper align="center">
            <Heading2>Nos services</Heading2>

            <SingleService
                title="Entretien"
                description="Tonte hebdomadaire/bi-mensuelle, entretien de parterres, soufflage des feuilles et taille des haies et arbustes."
                index={1}
            />

            <SingleService
                title="Aménagements"
                description="Pavage, dallage, terrasses en bois, pose de clotures, création de pelouses et remise à niveau du jardin."
                index={2}
            />

            <SingleService
                title="Plantations"
                description="Réalisation de croquis, haies, parterres, bacs à fleurs et plantes d'intérieur."
                index={3}
            />

            <SingleService
                title="Abattage/élagage"
                description="Elagage hivernal (fruitiers, arbres, ...), élagage de branches mortes, abattage tout au long de l'année et rognage."
                index={4}
            />
        </ServicesWrapper>
    </ServicesContainer>
);

export default Services;
