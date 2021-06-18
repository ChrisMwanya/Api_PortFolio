/* eslint-disable no-undef */
const project = require('./../models/projects');

// eslint-disable-next-line no-undef
module.exports = {
    getProjects: (request, response) => {
      project.get(request.con, (error, result) => {
        if (error) {
          console.log("requete échoué");
          return;
        }
        return response.status(200).send(result);
      });
    },
  
    getProject: (request, response) => {
        project.getById(request.con, request.params.id, (error, result) => {
        if (error) {
          console.log("requete échoué");
          return;
        }
        return response.status(200).send(result);
      });
    },
  
    addProject: (request, response) => {
        project.create(request.con, request.body, (error) => {
        if (error) {
          console.log(error);
          return;
        }
        response.status(200).send("ressource added successfully");
      });
    },
  
    updateProject: (request, response) => {
      request.body.id = request.params.id;
      project.update(request.con, request.body, (error) => {
        if (error) {
          console.log(error);
          return;
        }
        response.status(200).send("ressource updated successfully");
      });
    },
  
    deleteProject: (request, response) => {
        project.delete(request.con, request.params.id, (error) => {
        if (error) {
          console.log(error);
          return;
        }
        response.status(200).send("ressource deleted successfully");
      });
    },
  };
  