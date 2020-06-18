const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();
const port = process.env.PORT || 5000;

// Schema
const typeDefs = gql`
        type Query {
            hello : String
        }
    `

// Resolver
const resolvers = {
    Query : {
        hello: () => "Hello World!"
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });                                                                                    

app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
});