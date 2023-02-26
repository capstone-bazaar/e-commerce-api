type ObjectWithUnknownKeysType = {
  [key: string]: any;
};

type MailEventsType = {
  [key: string]: string;
};

interface CreateNewUserPayloadInterface {
  name: string;
  email: string;
}
export { ObjectWithUnknownKeysType, MailEventsType, CreateNewUserPayloadInterface };
