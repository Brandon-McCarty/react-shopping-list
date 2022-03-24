const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

//GET
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM list ORDER BY item ASC;`;

    pool.query(queryText)
    .then((result) => {
        console.log('in GET, got this', result);
        res.send(result.rows);
    }).catch((err) => {
        console.log('error in get', err);
        res.sendStatus(500);
    })
})

module.exports = router;