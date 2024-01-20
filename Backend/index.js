const express = require("express");
const app = express();

app.use(express.json());
const port = process.env.PORT;
app.get("/", async (req, res) => {
  res.send("Welcome To The Homepage");
});
app.listen(port, async () => {
  try {
    // await connection
    console.log("Connect to the port123");
  } catch (error) {
    console.log("Errr");
  }
});
