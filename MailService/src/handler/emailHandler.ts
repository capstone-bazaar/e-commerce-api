import { Response, Request } from "express";
import { MAIL_EVENTS } from "../utils/constants";
import { isObjectEmpty } from "../utils/helpers";
import EmailFormatter from "../formatter/emailFormatters";
import Mailgun from "mailgun.js";
import FormData from "form-data";

export default function emailHandler(req: Request, res: Response) {
  const { body } = req;
  let formattedMailData: any;

  if (isObjectEmpty(body)) {
    return res.status(404).send("Request body is empty!");
  }

  switch (body.event) {
    case MAIL_EVENTS.WELCOME:
      formattedMailData = EmailFormatter.welcomeMailData({
        name: body.name,
        recieverEmail: body.email,
      });
      break;

    default:
      break;
  }

  try {
    const mailgun = new Mailgun(FormData);

    const client = mailgun.client({
      username: "api",
      key: `${process.env.MAIL_GUN_API_KEY}`,
    });

    client.messages
      .create(`${process.env.MAIL_GUN_DOMAIN}`, formattedMailData)
      .then((mailgunResponse: any) => {
        res.status(200).send(mailgunResponse);
      });
  } catch (error) {
    res.status(500).send(error);
  }
}
