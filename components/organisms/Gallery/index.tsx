import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import useSWR from 'swr';

import Ids from '../../../constants/ids';
import intenseImage from '../../../utils/intenseImage';
import { Column } from '../../atoms/layout';
import { Body1, Body2, Heading2, Heading3 } from '../../atoms/typography';
import { IPhoto, preparePhotos } from './photos';
import { ErrorContainer, Fade, GalleryContainer, GalleryWrapper } from './style';

const fetcher = (url: string) =>
    fetch(url).then(async res => {
        const { data } = await res.json();
        return preparePhotos(data);
    });

let hasClicked = false;
const Gallery = () => {
    const { t } = useTranslation('gallery');
    const [shouldShowAll, setShouldShowAll] = useState(false);
    const { data: photos, error } = useSWR('/api/pictures', fetcher);

    const onImageClick = (event: React.MouseEvent<Element, MouseEvent>, photo: IPhoto, index: number) => {
        if (hasClicked) return;
        event.preventDefault();

        const elements = document.getElementsByClassName(
            'react-photo-album--photo',
        ) as HTMLCollectionOf<HTMLImageElement>;
        intenseImage(elements, {});

        const clickedElement = elements[index];
        clickedElement.click();

        hasClicked = true;
    };

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
                {error ? (
                    <ErrorContainer align="center" margin={[4, 0]}>
                        <Heading3>{t('error-title')}</Heading3>
                        <Body1>{t('error-description')}</Body1>
                    </ErrorContainer>
                ) : (
                    <PhotoAlbum onClick={onImageClick} photos={photos || []} layout="columns" />
                )}
            </GalleryWrapper>
            {!shouldShowAll && !error && <Fade onClick={() => setShouldShowAll(true)} />}
        </GalleryContainer>
    );
};

export default Gallery;
