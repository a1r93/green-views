import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD,
        },
        secure: true,
    });

    const mailData = {
        from: process.env.GMAIL_EMAIL,
        to: process.env.EMAIL_RECEIVED,
        subject: `Message From myself`,
        html: '<div>Hello world</div>',
    };

    transporter.sendMail(mailData, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
    res.status(200);
};

export default contactHandler;
