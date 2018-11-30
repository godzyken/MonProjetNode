var db = require('../db');

var Matiere = {
    getmatieres: function (callback) {
        return db.query('SELECT * from t_matiere', callback);
    },
    creatematiere: function (Matiere, callback) {
        return db.query('INSERT into t_matiere(libelle, coefficient) values (?,?)',[Matiere.libelle, Matiere.coefficient], callback)
    },
    deletematiere: function (Matiere, callback) {
        return db.query('DELETE FROM t_matiere(libelle, coefficient) WHERE (:id,:id)',[Matiere.libelle, Matiere.coefficient], callback)
    }
}
module.exports = Matiere;