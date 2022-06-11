import mysql from "mysql";


var db = mysql.createPool({
  connectionLimit:4,
  host: "localhost",
  user: "root",
  password: "12345",
  database:"socialdb"
});

db.getConnection((err,connection)=> {
  if(err)
  throw err;
  console.log('Database connected successfully');
  connection.release();
});

module.exports = {db};