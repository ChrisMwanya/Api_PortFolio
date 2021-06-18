/* eslint-disable no-undef */
const projecttechno = require("./../models/projecttechno");
// eslint-disable-next-line no-undef
module.exports = {
  getProjectTechnos: (request, response) => {
    projecttechno.get(request.con, (error, result) => {
      if (error) {
        console.log("requete échoué");
        return;
      }
      return response.status(200).send(result);
    });
  },

  getProjectTechno: (request, response) => {
    projecttechno.getById(request.con, request.params.id, (error, result) => {
      if (error) {
        console.log("requete échoué");
        return;
      }
      return response.status(200).send(result);
    });
  },

  addProjectTechno: (request, response) => {
    projecttechno.create(request.con, request.body, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      response.status(200).send("ressource added successfully");
    });
  },

  updateProjectTechno: (request, response) => {
    request.body.id = request.params.id;
    projecttechno.update(request.con, request.body, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      response.status(200).send("ressource updated successfully");
    });
  },

  deleteProjectTechno: (request, response) => {
    projecttechno.delete(request.con, request.params.id, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      response.status(200).send("ressource deleted successfully");
    });
  },
};
