const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
    updatePass(id: ID!, password: String!): User!
  }

  type Query {
    allUsers: [User!]!
    user(id: ID!): User!
  }

  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    dateJoined: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    username: String!
    password: String!
  }
`
