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

  create: (connection, dataToInsert, callback) => {
    console.log("model", dataToInsert);
    connection.query(
      "INSERT INTO techno( nom_techno ) VALUES (?)",
      dataToInsert.nom_techno,
      callback
    );
  },
  update: (connection, dataToUpdate, callback) => {
    connection.query(
      "UPDATE techno SET nom_techno = ? WHERE id_techno = ?",
      [dataToUpdate.nom_techno, dataToUpdate.id],
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
