import { ICloudinaryPicture } from '../../pages/api/pictures.types';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

export const preparePhotos = (pictures: ICloudinaryPicture[]) => {
    const preparedPhotos = pictures.map(picture => ({
        src: picture.secure_url,
        width: picture.width,
        height: picture.height,
        id: picture.public_id,
        images: breakpoints.map(breakpoint => {
            const height = Math.round((picture.height / picture.width) * breakpoint);
            return {
                src: picture.secure_url,
                width: breakpoint,
                height,
            };
        }),
    }));
    return preparedPhotos;
};
