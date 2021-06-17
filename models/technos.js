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
    connection.query(
      "INSERT INTO techno( nom_techno ) VALUES (?)",
      dataToInsert,
      callback
    );
  },
  update: (connection, dataToUpdate, callback) => {
    connection.query(
      "UPDATE techno SET nom_techno = ? WHERE id_techno = ?",
      [dataToUpdate.nomTechno, dataToUpdate.id],
      callback
    );
  },

  delete: (connection, idTechno, callback) => {
    connection.query(
      "DELETE FROM nom_techno WHERE id_techno = ?",
      idTechno,
      callback
    );
  },
};
