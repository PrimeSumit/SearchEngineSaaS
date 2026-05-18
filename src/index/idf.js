import tools from "../../data/tools_clean.json" with { type: "json" };
import documentFrequency from "./documentFreq.js";

const idf = {};
export default idf;
Object.keys(documentFrequency).forEach((token) => {
  const n = tools.length;
  const DF = documentFrequency[token];
  const result = Math.log(n / DF);
  idf[token] = result;
});
