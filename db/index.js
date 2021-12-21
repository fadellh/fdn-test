const { Client,Pool } = require('pg')
const {PG_DB,PG_HOST,PG_PASS,PG_PORT,PG_USER} = require('../config')

const client = new Pool({
    user: `${PG_USER}`,
    host: `${PG_HOST}`,
    database: `${PG_DB}`,
    password: `${PG_PASS}`,
    port: PG_PORT,
})


module.exports = {
    client
}
