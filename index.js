const express = require("express");
const app = express();
const port = 3333;

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
