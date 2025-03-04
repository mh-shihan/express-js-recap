const express = require("express");
const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("Hello Express World");
});

app.listen(port, () => {
  console.log(`Express JS Recap is listening on port : ${port}`);
});
