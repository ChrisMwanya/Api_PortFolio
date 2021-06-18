// eslint-disable-next-line no-undef
module.exports = {
  get: (connection, callback) => {
    connection.query("SELECT * FROM techno", callback);
  },

  getById: (connection, idTechno, callback) => {
    connection.query(
      "SELECT * FROM techno WHERE id_techno = ?",
      idTechno,
      callback
    );
  },

  create: (connection, technoToInsert, callback) => {
    connection.query(
      "INSERT INTO techno( nom_techno ) VALUES (?)",
      technoToInsert.nom_techno,
      callback
    );
  },
  update: (connection, technoToUpdate, callback) => {
    connection.query(
      "UPDATE techno SET nom_techno = ? WHERE id_techno = ?",
      [technoToUpdate.nom_techno, technoToUpdate.id],
      callback
    );
  },

  delete: (connection, idTechno, callback) => {
    connection.query(
      "DELETE FROM techno WHERE id_techno = ?",
      idTechno,
      callback
    );
  },
};
