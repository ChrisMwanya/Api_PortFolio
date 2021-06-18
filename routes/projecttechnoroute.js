/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const projectTechnoController = require("./../controllers/projecttechnocontroller");

const BASE_URI = "/api_portfolio";

router.get(
  `${BASE_URI}/project_technos`,
  projectTechnoController.getProjectTechnos
);
router.get(
  `${BASE_URI}/project_techno/:id`,
  projectTechnoController.getProjectTechno
);
router.post(
  `${BASE_URI}/project_techno/add`,
  projectTechnoController.addProjectTechno
);
router.put(
  `${BASE_URI}/project_techno/edit/:id`,
  projectTechnoController.updateProjectTechno
);
router.delete(
  `${BASE_URI}/project_techno/delete/:id`,
  projectTechnoController.deleteProjectTechno
);

module.exports = router;
