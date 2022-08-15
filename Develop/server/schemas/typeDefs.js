const { gql } = require('apollo-server-express');

const typeDefs=gql`
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: String
        title:string


    }
    type User {
        username: String
        email: String
        password: String


    }

    type Query {
        users: [User!]
    }





`;


module.exports = typeDefs;