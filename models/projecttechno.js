
module.exports = {
  get: (connection, callback) => {
    connection.query("SELECT * FROM project_techno", callback);
  },

  getById: (connection, idProjectTechno, callback) => {
    connection.query(
      "SELECT * FROM project_techno WHERE id_project_techno  = ?",
      idProjectTechno,
      callback
    );
  },

  getByIdProject: (connection, idProject, callback) => {
    connection.query(
      "SELECT nom_techno FROM techno INNER JOIN project_techno ON project_techno.id_techno=techno.id_techno WHERE project_techno.id_project = ?",
      idProject,
      callback
    );
  },

  getByIdTechno: (connection, idTechno, callback) => {
    connection.query(
      "SELECT * FROM project INNER JOIN project_techno ON project.id_project = project_techno.id_project WHERE project_techno.id_techno = ?",
      idTechno,
      callback
    );
  },

  create: (connection, projectTechnoToInsert, callback) => {
    connection.query(
      "INSERT INTO project_techno(id_techno,id_project ) VALUES (?,?)",
      [projectTechnoToInsert.idTechno, projectTechnoToInsert.idProject],
      callback
    );
  },
  update: (connection, projectTechnoToUpdate, callback) => {
    connection.query(
      "UPDATE project_techno SET id_techno = ?, id_project = ? WHERE id_project_techno = ?",
      [
        projectTechnoToUpdate.idTechno,
        projectTechnoToUpdate.idProject,
        projectTechnoToUpdate.id,
      ],
      callback
    );
  },

  delete: (connection, idProjectTechno, callback) => {
    connection.query(
      "DELETE FROM project_techno WHERE id_project_techno = ?",
      idProjectTechno,
      callback
    );
  },
};
