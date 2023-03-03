const express = require("express");
const router = express.Router();
const projects = require("../data/projects");

router.route("/").get(async (req, res) => {
  try {
    const projectsInformation = await projects.getAllProjects();
    res.status(200).json(projectsInformation);
  } catch (e) {
    res.status(404).json(e);
    return;
  }
});
router.route("/:projectName").get(async (req, res) => {
  try {
    const projectsInformation = await projects.getProjectsByName(
      req.params.projectName
    );
    res.status(200).json(projectsInformation);
  } catch (e) {
    res.status(404).json(e);
    return;
  }
});
module.exports = router;
