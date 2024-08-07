// graphql/resolvers.js
const Task = require("../models/task");

const resolvers = {
  Query: {
    tasks: () => Task.findAll(),
    task: (parent, { id }) => Task.findByPk(id),
  },
  Mutation: {
    createTask: (parent, args) => Task.create(args),
    updateTask: async (parent, { id, ...updates }) => {
      const task = await Task.findByPk(id);
      if (!task) return null;
      return task.update(updates);
    },
    deleteTask: async (parent, { id }) => {
      const task = await Task.findByPk(id);
      if (!task) return false;
      await task.destroy();
      return true;
    },
  },
};

module.exports = resolvers;
