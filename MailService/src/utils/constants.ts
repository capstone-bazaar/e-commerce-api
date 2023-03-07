import { MailEventsType } from "../types";

const MAIL_EVENTS: MailEventsType = {
  WELCOME: "welcome",
  VERIFY_EMAIL_LINK: "verify-email-link",
};

const MAIL_TEMPLATES = {
  WELCOME: "welcome-message",
  VERIFY_EMAIL_LINK: "email-verification",
};

export { MAIL_EVENTS, MAIL_TEMPLATES };
