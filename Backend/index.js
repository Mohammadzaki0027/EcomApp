const express = require("express");
const { connection } = require("./config/db");
const app = express();


app.use(express.json());
const port = process.env.PORT;
app.get("/", async (req, res) => {
  res.send("Welcome To The Homepage");
});
app.listen(port, async () => {
  try {
    await connection
    console.log("Connect to the port",port);
  } catch (error) {
    console.log("Errr",error);
  }
});
