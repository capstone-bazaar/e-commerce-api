const resolvers = {
  Query: {
    me() {
      return;
    },
  },
  User: {
    __resolveReference() {},
  },
};

export { resolvers };
