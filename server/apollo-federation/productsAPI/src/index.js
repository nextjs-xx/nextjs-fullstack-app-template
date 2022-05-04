const { ApolloServer, gql } = require("apollo-server");
const { buildSubgraphSchema } = require("@apollo/subgraph");

const typeDefs = gql`
  type Product @key(fields: "id") {
    id: ID!
    title: String
    url: String
    description: String
    price: Price
    salesRank(category: ProductCategory = ALL): Int
    salesRankOverall: Int
    salesRankInCategory: Int
    category: ProductCategory
    images(size: Int = 1000): [String]
    primaryImage(size: Int = 1000): String
  }

  type Price {
    cost: Money

    """
    A number between 0 and 1 signifying the % discount
    """
    deal: Float
    dealSavings: Money
  }

  type Department {
    category: ProductCategory
    url: String
  }

  enum ProductCategory {
    ALL
    GIFT_CARDS
    ELECTRONICS
    CAMERA_N_PHOTO
    VIDEO_GAMES
    BOOKS
    CLOTHING
  }

  type Money {
    amount: Float
    currencyCode: CURRENCY_CODE
  }

  enum CURRENCY_CODE {
    USD
    EUR
  }

  type Query {
    bestSellers(category: ProductCategory = ALL): [Product]
    categories: [Department]
    product(id: ID!): Product
  }
`;

const resolvers = {
  Query: {
    bestSellers: (parent, args, context, info) => {
      return [
        {
          id: "1",
          title: "The best product",
          url: "https://example.com",
          description: "The best product ever",
          price: {
            cost: {
              amount: 10.0,
              currencyCode: "USD",
            },
            deal: 0.5,
            dealSavings: {
              amount: 5.0,
              currencyCode: "USD",
            },
          },
          salesRank: 1,
          salesRankOverall: 1,
          salesRankInCategory: 1,
          category: "ALL",
          images: ["https://example.com/image.jpg"],
          primaryImage: "https://example.com/image.jpg",
        },
      ];
    },
    categories: (parent, args, context, info) => {
      return [
        {
          category: "ALL",
          url: "https://example.com/all",
        },
        {
          category: "GIFT_CARDS",
          url: "https://example.com/gift-cards",
        },
      ];
    },
    product: (parent, args, context, info) => {
      return {
        id: "1",
        title: "The best product",
        url: "https://example.com",
        description: "The best product ever",
        price: {
          cost: {
            amount: 10.0,
            currencyCode: "USD",
          },
          deal: 0.5,
          dealSavings: {
            amount: 5.0,
            currencyCode: "USD",
          },
        },
        salesRank: 1,
        salesRankOverall: 1,
        salesRankInCategory: 1,
        category: "ALL",
        images: ["https://example.com/image.jpg"],
        primaryImage: "https://example.com/image.jpg",
      };
    },
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

server
  .listen({ port: 4001 })
  .then(({ url }) => console.log("Products server ready at ", url));
