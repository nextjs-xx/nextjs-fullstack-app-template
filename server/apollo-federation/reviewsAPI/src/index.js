const { ApolloServer, gql } = require("apollo-server");
const { buildSubgraphSchema } = require("@apollo/subgraph");

const typeDefs = gql`
  type Review @key(fields: "id") {
    id: ID!
    rating: Float
    content: String
  }

  type ReviewSummary {
    totalReviews: Int
    averageRating: Float
  }

  type Product @key(fields: "id") {
    id: ID!
    reviews: [Review]
    reviewSummary: ReviewSummary
  }
`;

const resolvers = {
  Product: {
    reviews: async (parent, args, context, info) => {
      return [
        {
          id: "1",
          rating: 5,
          content: `review of product id ${parent.id}: Great product!`,
        },
      ];
    },
    reviewSummary: async (parent, args, context, info) => {
      return {
        averageRating: 5,
        totalReviews: 1,
      };
    },
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

server
  .listen({ port: 4002 })
  .then(({ url }) => console.log("Reviews server ready at ", url));
