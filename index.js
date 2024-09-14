import express from "express";

const app = express();

const port = 3000;

app.use("/api/0.1", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
