const resolvers = {
  Query: {
    product() {
      return;
    },
  },
  Product: {
    __resolveReference() {},
  },
};

export { resolvers };
