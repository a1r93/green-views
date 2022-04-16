import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PhotoAlbum from 'react-photo-album';
import useSWR from 'swr';

import Ids from '../../constants/ids';
import { Column } from '../atoms/layout';
import { Body2, Heading2 } from '../atoms/typography';
import { preparePhotos } from './photos';
import { Fade, GalleryContainer, GalleryWrapper } from './style';

const fetcher = (url: string) =>
    fetch(url).then(async res => {
        const { data } = await res.json();
        return preparePhotos(data);
    });

const Gallery = () => {
    const { t } = useTranslation('gallery');
    const [shouldShowAll, setShouldShowAll] = useState(false);
    const { data: photos, error } = useSWR('/api/pictures', fetcher);

    if (error) return <div>Failed to load</div>;

    return (
        <GalleryContainer
            justify="flex-start"
            align="center"
            padding={[4, 3]}
            id={Ids.GALLERY}
            shouldShowAll={shouldShowAll}
        >
            <Column>
                <Heading2>{t('gallery')}</Heading2>
                <Body2>{t('gallery-subtitle')}</Body2>
            </Column>
            <GalleryWrapper>
                <PhotoAlbum onClick={(event, test) => console.log(test)} photos={photos || []} layout="columns" />
            </GalleryWrapper>
            {!shouldShowAll && <Fade onClick={() => setShouldShowAll(true)} />}
        </GalleryContainer>
    );
};

export default Gallery;
