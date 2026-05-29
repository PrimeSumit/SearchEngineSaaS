import express from "express";
const route = express.Router();

route.get("/search", (req, res) => {
  res.send({ message: "search route working" });
});
export default route;
