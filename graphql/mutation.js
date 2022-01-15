const { DogType, CatType, CategoryType } = require("./type");
const { Dog, Cat, Category } = require("../models");
const { GraphQLString } = require("graphql");
const category = require("../models/category");
// Dog
const addDog = {
  type: DogType,
  description: "Create dog",
  args: {
    name: { type: GraphQLString },
  },
  resolve(parent, args) {
    const dog = new Dog({
      name: args.name,
    });
    return dog.save();
  },
};

const updateDog = {
  type: DogType,
  description: "Update Dog",
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const dogUpdate = await Dog.findOneAndUpdate(
      { _id: args.id },
      {
        name: args.name,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return dogUpdate;
  },
};
const deleteDog = {
  type: DogType,
  description: "Delete Dog",
  args: {
    idDog: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const deleteDog = await Dog.findOneAndDelete({
      _id: args.idDog,
    });
    return deleteDog;
  },
};
// Cat

const addCat = {
  type: CatType,
  description: "create Cat",
  args: {
    name: { type: GraphQLString },
  },
  resolve(parent, args) {
    const cat = new Cat({
      name: args.name,
    });
    return cat.save();
  },
};
const updateCat = {
  type: CatType,
  description: "update Cat",
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const catUpdate = await Cat.findOneAndUpdate(
      {
        _id: args.id,
      },
      {
        name: args.name,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return catUpdate;
  },
};
const deleteCat = {
  type: CatType,
  description: "delete Cat",
  args: {
    idCat: {
      type: GraphQLString,
    },
  },
  async resolve(parent, args) {
    const deleteCat = await Cat.findOneAndDelete({ _id: args.idCat });
    return deleteCat;
  },
};
//Category
const addCategory = {
  type: CategoryType,
  description: "create new Category",
  args: {
    name: { type: GraphQLString },
  },
  resolve(parent, args) {
    const category = new Category({
      name: args.name,
    });
    return category.save();
  },
};

module.exports = {
  addDog,
  updateDog,
  deleteDog,
  addCat,
  updateCat,
  deleteCat,
  addCategory,
};
