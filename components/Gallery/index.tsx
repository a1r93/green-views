import PhotoAlbum from 'react-photo-album';

import Ids from '../../constants/ids';
import { Heading2 } from '../atoms/typography';
import photos from './photos';
import { Fade, GalleryContainer, GalleryWrapper } from './style';

const Gallery = () => (
    <GalleryContainer justify="flex-start" align="center" padding={[4, 3]} id={Ids.GALLERY}>
        <Heading2>Gallerie photo</Heading2>
        <GalleryWrapper>
            <PhotoAlbum photos={photos} layout="columns" />
        </GalleryWrapper>
        <Fade />
    </GalleryContainer>
);

export default Gallery;
