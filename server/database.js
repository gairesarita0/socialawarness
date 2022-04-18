const {
    createPool
} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "socialdb",
    connectionLimit: 10
})

pool.query('select * from ')
