const { Client,Pool } = require('pg')
const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'fdn',
    password: 'postgres',
    port: 5432,
})


module.exports = {
    client
}
