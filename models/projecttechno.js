// eslint-disable-next-line no-undef
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

      create: (connection, projectTechnoToInsert, callback) => {
        connection.query(
          "INSERT INTO project_techno(id_techno,id_project ) VALUES (?,?)",
          [projectTechnoToInsert.idTechno,projectTechnoToInsert.idProject],
          callback
        );
      },
      update: (connection, projectTechnoToUpdate, callback) => {
        connection.query(
          "UPDATE project_techno SET id_techno = ?, id_project = ? WHERE id_project_techno = ?",
          [projectTechnoToUpdate.idTechno,projectTechnoToUpdate.idProject, projectTechnoToUpdate.id],
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
}