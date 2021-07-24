import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';
import addToCart from './addToCart';
import checkOut from './checkOut';

// make a fake graphql tagged template literal

const graphql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
  // typedefs:
  typeDefs: graphql`
    type Mutation {
      addToCart(productId: ID): CartItem
      checkOut(token: String!): Order
    }
  `,
  // resolvers:
  // links to node.js functions that will run when those things are requested upon by the graphQL api
  resolvers: {
    Mutation: {
      addToCart,
      checkOut,
    },
  },
});
