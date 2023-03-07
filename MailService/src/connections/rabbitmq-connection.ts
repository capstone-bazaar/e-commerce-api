import amqp from "amqplib";
import emailHandler from "../handler/emailHandler";
import {
  CreateNewUserPayloadInterface,
  VerifyEmailPayloadInterface,
} from "../types";

let amqpChannel: any = null;

const createAmqpConnection = async () => {
  const connection = await amqp.connect("amqp://localhost");
  amqpChannel = await connection.createChannel();

  await amqpChannel.consume("mailQueue", async (message: any) => {
    if (!message) {
      return;
    }
    const {
      event,
      payload,
    }: {
      event: string;
      payload: CreateNewUserPayloadInterface | VerifyEmailPayloadInterface;
    } = JSON.parse(message.content.toString());

    await emailHandler(event, payload);
    amqpChannel.ack(message);
  });
};

export { amqpChannel, createAmqpConnection };
