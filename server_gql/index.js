import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "schema.graphql",
  resolvers,
});

server.start(() =>
  console.log("http://localhost:4000 Graphql Server is Running")
);
