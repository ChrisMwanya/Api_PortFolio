import techno from "./../models/technos";

// eslint-disable-next-line no-undef
module.exports = {
  getTechnos: (request, response) => {
    techno.get(request.con, (error, result) => {
      if (error) {
        console.log("requete échoué");
        return;
      }
      return response.status(200).send(result);
    });
  },

  getTechno: (request, response) => {
    techno.getById(request.con, request.params.id, (error, result) => {
      if (error) {
        console.log("requete échoué");
        return;
      }
      return response.status(200).send(result);
    });
  },

  addTechno: (request, response) => {
    techno.create(request.con, request.body, (error) => {
      if (error) {
        console.log("requete échoué");
        return;
      }
      response.status(200).send("ressource added successfully");
    });
  },

  updateTechno: (request, response) => {
    techno.update(request.con, request.body, (error) => {
      if (error) {
        console.log("requete échoué");
        return;
      }
      response.status(200).send("ressource updated successfully");
    });
  },

  deleteTechno: (request, response) => {
    techno.delete(request.con, request.params.id, (error) => {
      if (error) {
        console.log("requete échoué");
        return;
      }
      response.status(200).send("ressource deleted successfully");
    });
  },
};
