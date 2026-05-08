import tools from "../../data/tools_clean.json" with { type: "json" };
import tokenize from "../processing/tokenizer.js";

const invertedIndex = {};

tools.forEach((tool) => {
  const searchText = `${tool.name} ${tool.description} ${tool.category} ${tool.tags.join(" ")}`;
  const tokens = tokenize(searchText);
  console.log(tokens);
});
