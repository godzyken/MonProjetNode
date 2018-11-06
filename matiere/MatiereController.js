var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Matiere = require('./Matiere');


router.get('/', function (req, res) {
    Matiere.getmatieres(function (err,rows) {
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports = router;