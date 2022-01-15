const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

const DogType = new GraphQLObjectType({
  name: "Dog",
  description: "Dog Type",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});
const CatType = new GraphQLObjectType({
  name: "Cat",
  description: "Cat Type",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});
const CategoryType = new GraphQLObjectType({
  name: "Category",
  description: "Category Type",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

module.exports = { DogType, CatType, CategoryType };
