import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (_, res) => {
  res.send("Welcome to J. Blanton Plumbing");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
