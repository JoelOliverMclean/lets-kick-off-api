const express = require("express");

const app = express();

const port = 3000;

app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "This has CORS enabled 🎈" });
});

app.use("/api/0.1", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
