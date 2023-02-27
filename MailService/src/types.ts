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

interface VerifyEmailPayloadInterface {
  payload: {
    [key: string]: any;
  };
  event: string;
}
export {
  ObjectWithUnknownKeysType,
  MailEventsType,
  CreateNewUserPayloadInterface,
  VerifyEmailPayloadInterface,
};
