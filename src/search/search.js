import invertedIndex from "../index/buildIndex.js";
import tokenize from "../processing/tokenizer.js";
import tools from "../../data/tools_clean.json" with { type: "json" };
const query = "video meetings";

const tokens = tokenize(query);
//OR retrival : this is any match token print
tokens.forEach((token) => {
  const result = invertedIndex[token];

  tools.forEach((tool) => {
    if (result.includes(tool.id)) {
      console.log(tool.name);
    }
  });
});
