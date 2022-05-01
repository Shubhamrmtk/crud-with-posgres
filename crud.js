const { pool } = require("./config/db");

const insertValue = async () => {
  try {
    const res = await pool.query(
      "insert into instagram(username,name,age) values('shubham_r21','shubham',25)"
    );
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};
// insertValue();

const updateRow = async (id, updatedInfo) => {
  try {
    const res = await pool.query(
      `update instagram set username='${updatedInfo.username}',name='${updatedInfo.name}',age='${updatedInfo.age}' where id='${id}'`
    );
    console.log("info updated succesfuly");
  } catch (err) {
    console.log(err);
  }
};

// updateRow(1, { name: "saikiran", username: "meranam_saikiran_hia", age: 25 });
//   }
// };
// updateRow(1, { name: "saikiran", username: "meranam_saikiran_hia", age: 25 });

const updateField = async (id, updateInfo) => {
  const list = [];
  for (let i in updateInfo) {
    list.push(`${i}='${updateInfo[i]}'`);
  }
  const qString = list.join(",");
  console.log(qString);
  try {
    const res = await pool.query(
      `update instagram set ${qString} where id=${id}`
    );
  } catch (err) {
    console.log(err);
  }
};

// updateField(4, { name: "Raja" });

const getRows = async () => {
  try {
    const res = await pool.query(`select * from instagram`);
    console.log(res.rows);
  } catch (err) {
    console.log(err);
  }
};

// getRows();

const getRowa = async (id) => {
  try {
    const res = await pool.query(`select * from instagram where id=${id}`);
    if (res.rows.length == 0) {
      console.log(`id dosen't exits`);
    } else {
      console.log(res.rows);
    }
  } catch (err) {
    console.log(err);
  }
};
// getRowa(10);

const DeleteRow = async (id) => {
  try {
    const res = await pool.query(`delete from instagram where id=${id}`);
    console.log(`your data has `);
  } catch (err) {
    console.log(err);
  }
};
// DeleteRow(4);

module.exports = { getRowa, updateField, updateRow, DeleteRow, insertValue };
