const { dogs, dog, cats, categories } = require("./query");
const {
  addDog,
  updateDog,
  deleteDog,
  addCat,
  updateCat,
  deleteCat,
  addCategory,
} = require("./mutation");
const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: { dogs, dog, cats, categories },
});
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {
    addDog,
    updateDog,
    deleteDog,
    addCat,
    updateCat,
    deleteCat,
    addCategory,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
