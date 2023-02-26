import amqp, { Channel } from "amqplib";

let amqpChannel: Channel | null = null;

const createAmqpConnection = async () => {
  const connection = await amqp.connect("amqp://localhost");
  amqpChannel = await connection.createChannel();
  await amqpChannel.assertQueue("mailQueue");
};

export { amqpChannel, createAmqpConnection };
