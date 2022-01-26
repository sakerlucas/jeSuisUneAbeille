var express = require('express');
var path = require('path');
const sql = require("../db.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).sendFile(path.resolve(__dirname + "/../public/plants.html"))
});

router.get('/listPlants', (req, res, next) => {
  sql.query('SELECT * FROM plantesTest', async (error, results) => {
        if (error) throw error

        res.json(results)
    })
})

module.exports = router;
