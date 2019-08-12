import * as express from "express";
import * as mongoose from "mongoose";
import * as cors from "cors";
import * as colors from "colors";
import { router as sampleRouter } from "./api/index";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("Hey there!");
});

app.use("/users", sampleRouter);

app.listen(PORT, () => {
  console.log(`Ready on ${colors.blue(`http://localhost:${PORT}/`)}`);
  console.log(`Api mounted on PORT: ${PORT}`);
});
