const { gql } = require('apollo-server-express');

const typeDefs = gql`
    # Type(s)
    type Tweet {
        _id: String
        tweet: String
        author: String
    }
    # Query(ies)
    type Query {
        getTweet(_id: String): Tweet
        getTweets: [Tweet]
    }
    # Mutaion(s)
    type Mutation {
        createTweet(tweet: String, author: String): Tweet
        deleteTweet(_id: String): Tweet
        updateTweet(_id: String): Tweet
    }
`
module.exports = typeDefs;