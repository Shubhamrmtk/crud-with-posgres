const express = require("express");
const app = express();
const router = require("../routes/router");
// const getRows = require("./crud");
const { MAIN_PORT } = require("../cred");

const port = MAIN_PORT || 3000;
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log("listening on the server port 3000");
});
