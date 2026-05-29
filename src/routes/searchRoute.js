import express from "express";
import search from "../search/search.js";
const route = express.Router();

route.get("/search", (req, res) => {
  
  const query=req.query.q
  const result=search(query)
  res.send(result)



});
export default route;
