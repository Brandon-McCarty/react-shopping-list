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

// DELETE item
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Need to delete: ', id);
    const queryText = `
        DELETE FROM "list"
        WHERE "id" = $1;
    `;

    pool.query(queryText, [id])
        .then(result => {
            res.sendStatus(204);
        }).catch(err => {
            console.log(err);
        });

})

// PUT items
router.put('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Need to update: ', id);

    const queryText = `
        UPDATE "list"
        SET "purchased" = NOT "purchased"
        WHERE "id" = $1
    `;

    pool.query(queryText, [id])
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
        });

});

router.post('/', (req, res) => {
    const item = req.body;
    const queryText = `INSERT INTO list (item, quantity, unit)
                        VALUES ($1, $2, $3)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(queryText, [item.item, item.quantity, item.unit])
        .then((result) => {
            console.log(`Added item to the database`, item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

module.exports = router;