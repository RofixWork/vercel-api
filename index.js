const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.json("Express on Vercel");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});
module.exports = app;
