import tokenize from "../processing/tokenizer.js";
import invertedIndex from "../index/buildIndex.js";
import tfidf from "../ranking/tfidf.js";
import tools from "../../data/tools_clean.json" with { type: "json" };

export default function search(query) {
  const tokens = tokenize(query);
  const scores = {};

  tokens.forEach((token) => {
    if (!invertedIndex[token]) {
      return;
    }
    Object.entries(invertedIndex[token]).forEach((entry) => {
      const toolId = entry[0];
      const tf = entry[1];
      const score = tfidf(tf, token);
      if (!scores[toolId]) {
        scores[toolId] = score;
      } else {
        scores[toolId] += score;
      }
    });
  });
  let finalres = [];
  const result = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  result.forEach((entry) => {
    const toolId = entry[0];
    const score = entry[1];
    const res = { tool: tools.find((tool) => tool.id == toolId), score: score };
    finalres.push(res);
  });
  return finalres;
}
console.log(search("video meetings"));
