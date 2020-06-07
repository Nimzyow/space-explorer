const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs });

//our app needs to be able to
// 1) Fetch a list of all upcoming rocket launches
// 2) Fetch a specific launch by its ID
// 3) Log in the user
// 4) Book a launch for a logged-in user
// 5) Cancel a previously booked launch for a logged-in user
