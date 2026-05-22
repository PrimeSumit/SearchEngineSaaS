import idf from "../index/idf.js";
import tools from "../../data/tools_clean.json" with { type: "json" };

export default function tfidf(tf, token) {
  return tf * idf[token];
}
