const express = require("express");
const app = express();
const port = 8080;

app.use((req, res) => {
  let { query } = req.query;
  console.log(query);
  console.log("Hi, I'm a middleware");
  res.send("Middleware finished.");
});

app.get("/", (req, res) => {
  res.send("Hello Root World");
});

app.get("/random", (req, res) => {
  res.send("Random");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
