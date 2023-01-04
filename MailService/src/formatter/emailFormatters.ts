import { MAIL_TEMPLATES } from "../utils/constants";

const welcomeMailData = ({
  name,
  recieverEmail,
}: {
  name: string;
  recieverEmail: string;
}) => {
  return {
    from: "Bazaar Team <bazaar@yopmail.com>",
    to: recieverEmail,
    subject: "Hello from Bazaar!",
    template: MAIL_TEMPLATES.WELCOME,
    "h:X-Mailgun-Variables": JSON.stringify({
      name,
      support: "Bazaar Team",
    }),
  };
};

export default { welcomeMailData };
