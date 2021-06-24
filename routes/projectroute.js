
const express = require("express");
const router = express.Router();
const projectController = require("./../controllers/projectcontrollers");
const projectTechnoController = require("./../controllers/projecttechnocontroller");

const BASE_URI = "/api_portfolio";

router.get(`${BASE_URI}/projects`, projectController.getProjects);
router.get(`${BASE_URI}/project/:id`, projectController.getProject);
router.get(
  `${BASE_URI}/project/:id/technos`,
  projectTechnoController.getTechnoByProject
);
router.post(`${BASE_URI}/project/add`, projectController.addProject);
router.put(`${BASE_URI}/project/edit/:id`, projectController.updateProject);
router.delete(
  `${BASE_URI}/project/delete/:id`,
  projectController.deleteProject
);

module.exports = router;
