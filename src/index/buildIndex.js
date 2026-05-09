import tools from "../../data/tools_clean.json" with { type: "json" };
import tokenize from "../processing/tokenizer.js";

const invertedIndex = {};

tools.forEach((tool) => {
  const searchText = `${tool.name} ${tool.description} ${tool.category} ${tool.tags.join(" ")}`;
  const tokens = tokenize(searchText);
  console.log(tokens);
  tokens.forEach((token) => {
    if (invertedIndex[token] == null) {
      invertedIndex[token] = [];
    }
    if (invertedIndex[token].includes(tool.id)) {
    } else {
      invertedIndex[token].push(tool.id);
    }

    console.log(invertedIndex[token]);
  });
});
