import mysql from "mysql";

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345",
    database: "socialdb",
});

module.exports = {db};

