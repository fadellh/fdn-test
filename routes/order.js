var express = require('express');
var router = express.Router();
var pg = require('../db/index');
const { getTable, getHeader } = require('../services/order/orders');

/* GET order listing. */
router.get('/', async function(req, res, next) {
  try {
    await pg.client.connect()
    const query = await pg.client.query('SELECT * from "order"')

    let out = await getTable(query.rows)
    let header = await getHeader(out)
    // res.send({header:header,data:out}).status(200);
    res.status(200).render('orders',{title: "Orders",rows: out, header: header})

  } catch (error) {
    res.send({error: error}).status(500)
  }
});

router.get('/pivot', async function(req, res, next) {
  try {
    await pg.client.connect()
    const query = await pg.client.query('SELECT * from "order"')

    let out = await getTable(query.rows,'pivot')
    let header = await getHeader(out)

    res.status(200).render('orders-pivot',{title: "Orders",rows: out, header: header})
    // res.send({header:header,data:out}).status(200);
  } catch (error) {
    res.send({error: error}).status(500)
  }
});

module.exports = router
