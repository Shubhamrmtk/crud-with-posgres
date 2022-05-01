const { Pool } = require("pg");
const { DB_USER, HOST, PASSWORD, DATABASE, PORT } = require("../cred");
const pool = new Pool({
  user: DB_USER,
  host: HOST,
  password: PASSWORD,
  database: DATABASE,
  port: PORT,
});

pool.connect((err, res) => {
  if (err) {
    return console.log(err.message);
  }
  console.log("connected");
});

// pool.query(
//   "create table instagram(id  serial primary key,username char(100) unique,name char(100),age int)",
//   (err, res) => {
//     if (err) {
//       return console.log(err.message);
//     }
//     console.log("table is created");
//   }
// );

module.exports = { pool };
