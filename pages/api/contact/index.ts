import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import { validateContactBody } from './validation';

const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
    },
    secure: true,
});
const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const bodyErrors = validateContactBody(req.body);
    if (bodyErrors.length > 0) {
        res.status(400).json({ message: 'The request body is invalid', errors: bodyErrors });
        return;
    }

    const mailData = {
        from: process.env.GMAIL_EMAIL,
        to: process.env.EMAIL_RECEIVED,
        subject: `Nouveau message du site Green Views`,
        html: '<div>Hello world</div>',
    };

    try {
        await transporter.sendMail(mailData);
        res.status(200).send({ message: 'The message got sent successfully' });
    } catch (error) {
        res.status(500).send({ message: 'An error occured while sending the email' });
    }
};

export default contactHandler;
