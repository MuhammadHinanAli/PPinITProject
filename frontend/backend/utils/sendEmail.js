import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: options.email,
        subject: options.subject,
        text: `${options.message} \n\nEMAIL OF THE USER WHO SENT THE MESSAGE: ${options.userEmail}`,
    };

    await transporter.sendMail(mailOptions);
}

//NODEMAILER
//DATA FROM CONFIG.ENV SUCH AS HOST/PORT/SERVICE/EMAIL