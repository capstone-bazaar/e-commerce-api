import { MAIL_TEMPLATES } from "../utils/constants";

const welcomeMailData = ({
  name,
  recieverEmail,
}: {
  name: string;
  recieverEmail: string;
}) => {
  return {
    from: "Bazaar Team <hello@mybazaar.tech>",
    to: recieverEmail,
    subject: "Hello from Bazaar!",
    template: MAIL_TEMPLATES.WELCOME,
    "h:X-Mailgun-Variables": JSON.stringify({
      name,
    }),
  };
};

const verfiyEmailLink = ({
  name,
  verificationID,
  recieverEmail,
  userId,
}: {
  name: string;
  verificationID: string;
  userId: string;
  recieverEmail: string;
}) => {
  return {
    from: "Bazaar Team <hello@mybazaar.tech>",
    to: recieverEmail,
    subject: "[MyBazaar] Verify Your Email",
    template: MAIL_TEMPLATES.VERIFY_EMAIL_LINK,
    "h:X-Mailgun-Variables": JSON.stringify({
      name,
      verifyLink: `${process.env.CLIENT_URL}verification?id=${userId}&verify=${verificationID}`,
    }),
  };
};

export default { welcomeMailData, verfiyEmailLink };
