const { DogType, CatType, CategoryType } = require("./type");
const { Dog, Cat, Category } = require("../models");
const { GraphQLList, GraphQLString, GraphQLID } = require("graphql");

//Dog
const dogs = {
  type: new GraphQLList(DogType),
  description: "Retrieves list of dogs",
  resolve(parent, args) {
    return Dog.find();
  },
};
const dog = {
  type: DogType,
  description: "Retrieve one dog",
  args: { id: { type: GraphQLID } },
  resolve(_, args) {
    return Dog.findById(id);
  },
};
//Cat
const cats = {
  type: new GraphQLList(CatType),
  description: "Retrieves list of cats",
  resolve(parent, args) {
    return Cat.find();
  },
};
//Category
const categories = {
  type: new GraphQLList(CategoryType),
  description: "Retrives list of categories",
  resolve(parent, args) {
    return Category.find();
  },
};

module.exports = { dogs, dog, cats, categories };
