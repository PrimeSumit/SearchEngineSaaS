import express from "express";
import route from "./routes/searchRoute.js";
const port = 3000;
const app = express();

app.use(express.json());
app.use(route)
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
