import invertedIndex from "../index/buildIndex.js";
import tokenize from "../processing/tokenizer.js";
import tools from "../../data/tools_clean.json" with { type: "json" };
const query = "zoom";

const tokens = tokenize(query);
tokens.forEach((token) => {
  const result = invertedIndex[token];
  console.log(result);
  tools.forEach((tool) => {
    if (result.includes(tool.id)) {
      console.log(tool.name);
    }
  });
});
