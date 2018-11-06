var mariadb = require('mariadb');

var connection = mariadb.createPool({
    host : 'localhost',
    user : 'root',
    password : 'toor',
    database : 'bd_notes'
});
module.exports=connection;
