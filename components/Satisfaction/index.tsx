import PhotoAlbum from 'react-photo-album';

import Ids from '../../constants/ids';
import { Heading2 } from '../atoms/typography';
import photos from './photos';
import { Fade, SatisfactionContainer, SatisfactionWrapper } from './style';

const Satisfaction = () => (
    <SatisfactionContainer justify="flex-start" align="center" padding={[4, 3]} id={Ids.SATISFACTION}>
        <Heading2>Gallerie photo</Heading2>
        <SatisfactionWrapper>
            <PhotoAlbum photos={photos} layout="columns" />
        </SatisfactionWrapper>
        <Fade />
    </SatisfactionContainer>
);

export default Satisfaction;
