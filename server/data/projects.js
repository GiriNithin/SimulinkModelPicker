const { projects } = require("../config/mongoCollections");
const ObjectID = require("mongodb").ObjectId;
// Need to write helpers functions and all the edge cases

const getAllProjects = async () => {
  const collection = await projects();
  let projectsCollection = await collection.find({}).toArray();
  if (projectsCollection.length === 0) {
    throw "No project found";
  }
  return projectsCollection;
  // Will return all the projects in an array
};
const getProjectsByName = async (projectName) => {
  const collection = await projects();
  let projectsCollection = await collection
    .find({ title: projectName })
    .toArray();
  if (projectsCollection.length === 0) {
    throw "No project found";
  }
  return projectsCollection;
};

module.exports = {
  getAllProjects,
  getProjectsByName,
};
