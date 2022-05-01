const { pool } = require("../config/db");
exports.getData = async (req, res) => {
  try {
    const data = await pool.query(`select * from instagram`);
    // console.log(data.rows);
    res.send(data.rows);
  } catch (err) {
    console.log(err.message);
  }
};

exports.insertData = async (req, res) => {
  try {
    const { name, username, age } = await req.body;
    await pool.query(
      `insert into instagram(username,name,age) values('${username}','${name}',${age})`
    );
    console.log("data inserted sucssesfully");
    res.send("data inserted sucssesfully");
  } catch (err) {
    console.log(err.message);
    res.status(500, send("somthing is wrong"));
  }
};

exports.getData_by_id = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await pool.query(`select * from instagram where id=${id}`);
    res.send(data.rows);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

exports.updateData_by_id = async (req, res) => {
  try {
    const updateInfo = await req.body;
    const id = await req.params.id;

    const list = [];
    for (let i in updateInfo) {
      list.push(`${i}='${updateInfo[i]}'`);
    }
    const qString = list.join(",");
    console.log(qString);
    const data = await pool.query(
      `update instagram set ${qString} where id=${id}`
    );
    res.send("data is updated");
  } catch (err) {
    console.log(err);
  }
};

exports.deleteData_by_id = async (req, res) => {
  try {
    const id = await req.params.id;
    await pool.query(`delete from instagram where id=${id}`);
    console.log(`your data has been updated sucssesfuly `);
    res.send("your data has been delted sucsessfuly");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};
