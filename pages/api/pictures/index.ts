import { v2 as cloudinary } from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';

import { ICloudinaryPictureResponse } from './types';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

const fetchAllPictures = () =>
    new Promise((resolve: (value: ICloudinaryPictureResponse) => void, reject: (error: Error) => void) => {
        cloudinary.api.resources(
            {
                type: 'upload',
                max_results: 100,
                prefix: 'green_views',
            },
            (error, result: ICloudinaryPictureResponse) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            },
        );
    });

const picturesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            const allPictures = await fetchAllPictures();
            res.status(200).json({ data: allPictures.resources });
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default picturesHandler;
