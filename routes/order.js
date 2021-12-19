var express = require('express');
var router = express.Router();
var pg = require('../db/index');
const { getTable } = require('../services/order/orders');

/* GET order listing. */
router.get('/', async function(req, res, next) {
  try {
    await pg.client.connect()
    const query = await pg.client.query('SELECT * from "order"')
    console.log(query.rows)
    let out = await getTable(query.rows)
    res.send({data:out}).status(200);
  } catch (error) {
    console.log(error)
  }
});

router.get('/pivot', async function(req, res, next) {
  try {
    await pg.client.connect()
    const query = await pg.client.query('SELECT * from "order"')
    console.log(query.rows)
    let out = await getTable(query.rows,'pivot')
    res.send({data:out}).status(200);
  } catch (error) {
    console.log(error)
  }
});

module.exports = router
