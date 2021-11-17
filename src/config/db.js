const { Pool } = require('pg');

module.exports = new Pool({
    user: 'postgres',
    password: '159753',
    host: 'localhost',
    database: 'ipueirasforall',
    port: 5432
});