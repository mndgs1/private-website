require("dotenv").config();

const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
);

interface sendEmailProps {
    name: string;
    email: string;
    message: string;
    subject: string;
}
export async function sendEmail({
    name,
    email,
    subject,
    message,
}: sendEmailProps) {
    const request = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
            {
                From: {
                    Email: "website@mindb.no",
                    Name: "Mindb.no Contact Form",
                },
                To: [
                    {
                        Email: "contact@mindb.no",
                        Name: "Mindaugas Bankauskas",
                    },
                ],
                Subject: `Message from ${name}`,
                HTMLPart: `
                <div>
                    <h1>${subject}</h1>
                    <h2>${name}</h2>
                    <h2>${email}</h2>
                    <p>${message}</p>
                </div>`,
            },
        ],
    });

    request
        .then((result: any) => {
            return `Thank you ${name} for your message! I will get back to you as soon as possible!`;
        })
        .catch((err: any) => {
            console.log(err.statusCode);
            return `Oops! Something went wrong. Please try again later.`;
        });
}
