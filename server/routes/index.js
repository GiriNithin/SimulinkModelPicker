const projectsRoutes = require("./projects");

const RoutesHandler = (app) => {
  app.use("/projects", projectRoutes);
  app.use("*", (req, res) => {
    res.status(404).json();
  });
};
module.exports = {
  RoutesHandler,
};
