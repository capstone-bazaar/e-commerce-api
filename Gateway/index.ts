const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");
require("dotenv").config();

const gateway = new ApolloGateway({
  serviceList: [
    { name: "userService", url: process.env.USER_SERVICE_URL },
    { name: "paymentService", url: process.env.PAYMENT_SERVICE_URL },
    { name: "productService", url: process.env.PRODUCT_SERVICE_URL },
  ],
});

const server = new ApolloServer({ gateway });

server.listen({ port: 4000 }).then((url: string) => {
  console.log(`GATEWAY ready at url: ${url}`);
});
