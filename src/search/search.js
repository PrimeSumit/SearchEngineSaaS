import invertedIndex from "../index/buildIndex.js";
import tokenize from "../processing/tokenizer.js";
import tools from "../../data/tools_clean.json" with { type: "json" };
const query = "video meetings";

const tokens = tokenize(query);

let currentResult = invertedIndex[tokens[0]];
tokens.forEach((token, index) => {
  if (index === 0) {
    return;
  }
  const result = invertedIndex[token];
  currentResult = currentResult.filter((id) => {
    return result.includes(id);
  });
});
tools.forEach((tool) => {
  if (currentResult.includes(tool.id)) {
    console.log(tool.name);
  }
});
