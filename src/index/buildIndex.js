import tools from "../../data/tools_clean.json" with { type: "json" };
import tokenize from "../processing/tokenizer.js";

const invertedIndex = {};
export default invertedIndex;

tools.forEach((tool) => {
  const searchText = `${tool.name} ${tool.description} ${tool.category} ${tool.tags.join(" ")}`;
  const tokens = tokenize(searchText);

  tokens.forEach((token) => {
    if (!invertedIndex[token]) {
      invertedIndex[token] = {};
    }
    if (!invertedIndex[token][tool.id]) {
      invertedIndex[token][tool.id] = 1;
    } else {
      invertedIndex[token][tool.id]++;
    }
  });
});
console.log(invertedIndex["video"]);
