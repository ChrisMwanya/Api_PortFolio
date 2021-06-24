
const express = require("express");
const router = express.Router();
const technoController = require("./../controllers/technocontroller");
const projectTechnoController = require("./../controllers/projecttechnocontroller");

const BASE_URI = "/api_portfolio";

router.get(`${BASE_URI}/technos`, technoController.getTechnos);
router.get(`${BASE_URI}/techno/:id`, technoController.getTechno);
router.get(
  `${BASE_URI}/techno/:id/projects`,
  projectTechnoController.getProjectByTechno
);
router.post(`${BASE_URI}/techno/add`, technoController.addTechno);
router.put(`${BASE_URI}/techno/edit/:id`, technoController.updateTechno);
router.delete(`${BASE_URI}/techno/delete/:id`, technoController.deleteTechno);

module.exports = router;
