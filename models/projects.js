/* eslint-disable no-undef */
module.exports = {
  get: (connection, callback) => {
    connection.query("SELECT * FROM project ", callback);
  },

  getById: (connection, idProject, callback) => {
    connection.query(
      "SELECT * FROM project  WHERE id_project  = ?",
      idProject,
      callback
    );
  },

  create: (connection, projectToInsert, callback) => {
    connection.query(
      "INSERT INTO project( project, description_project, url_image_project, url_github_project, url_project_deploy) VALUES (?,?,?,?,?)",
      [
        projectToInsert.project,
        projectToInsert.descriptionProject,
        projectToInsert.urlImageProject,
        projectToInsert.urlGithubProject,
        projectToInsert.urlProjectDeploy,
      ],
      callback
    );
  },
  update: (connection, projectToUpdate, callback) => {
    connection.query(
      "UPDATE project SET project = ?, description_project = ?, url_image_project = ?, url_github_project = ?, url_project_deploy = ? WHERE id_project = ?",
      [
        projectToUpdate.project,
        projectToUpdate.descriptionProject,
        projectToUpdate.urlImageProject,
        projectToUpdate.urlGithubProject,
        projectToUpdate.urlProjectDeploy,
        projectToUpdate.id,
      ],
      callback
    );
  },

  delete: (connection, idProject, callback) => {
    connection.query(
      "DELETE FROM project WHERE id_project = ?",
      idProject,
      callback
    );
  },
};
