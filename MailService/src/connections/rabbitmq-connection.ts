import amqp from "amqplib";
import emailHandler from "../handler/emailHandler";
import { CreateNewUserPayloadInterface } from "../types";

let amqpChannel = null;

const createAmqpConnection = async () => {
  const connection = await amqp.connect("amqp://localhost");
  amqpChannel = await connection.createChannel();

  await amqpChannel.consume("mailQueue", async (message) => {
    if (!message) {
      return;
    }
    const {
      event,
      payload,
    }: { event: string; payload: CreateNewUserPayloadInterface } = JSON.parse(
      message.content.toString()
    );

    await emailHandler(event, payload);
  });
};

export { amqpChannel, createAmqpConnection };
