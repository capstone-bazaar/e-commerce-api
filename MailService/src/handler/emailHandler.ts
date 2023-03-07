import { MAIL_EVENTS } from "../utils/constants";
import EmailFormatter from "../formatter/emailFormatters";
import Mailgun from "mailgun.js";
import FormData from "form-data";

const emailHandler = async (event: string, payload: any) => {
  let formattedMailData: any;

  switch (event) {
    case MAIL_EVENTS.WELCOME:
      formattedMailData = EmailFormatter.welcomeMailData({
        name: payload.name,
        recieverEmail: payload.email,
      });
      break;

    case MAIL_EVENTS.VERIFY_EMAIL_LINK:
      formattedMailData = EmailFormatter.verfiyEmailLink({
        verificationID: payload.verificationID,
        recieverEmail: payload.email,
        name: payload.name,
        userId: payload.userId,
      });

    default:
      break;
  }

  try {
    const mailgun = new Mailgun(FormData);

    const client = mailgun.client({
      username: "api",
      url: "https://api.eu.mailgun.net/",
      key: `${process.env.MAIL_GUN_API_KEY}`,
    });

    await client.messages.create(
      `${process.env.MAIL_GUN_DOMAIN}`,
      formattedMailData
    );
  } catch (error) {
    throw error;
  }
};

export default emailHandler;
