const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname,'.env')
});  



module.exports = {
    PG_USER : process.env.PG_USER,
    PG_PASS: process.env.PG_PASS,
    PG_DB: process.env.PG_DB,
    PG_HOST: process.env.PG_HOST,
    PG_PORT: process.env.PG_PORT
}