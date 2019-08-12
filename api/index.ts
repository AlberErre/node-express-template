import * as express from "express";
import * as userData from "../data/data.json";
let router = express.Router();

router.get("/", function(req, res) {
  const data = userData;
  res.json(data);
});

export { router };
