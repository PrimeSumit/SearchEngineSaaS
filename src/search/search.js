import invertedIndex from "../index/buildIndex.js";
import tokenize from "../processing/tokenizer.js";
import tools from "../../data/tools_clean.json" with { type: "json" };
const query = "video meetings";

const tokens = tokenize(query);

let andResult = invertedIndex[tokens[0]];
tokens.forEach((token, index) => {
  if (index === 0) {
    return;
  }
  const result = invertedIndex[token];
  andResult = andResult.filter((id) => {
    return result.includes(id);
  });
});
tools.forEach((tool) => {
  if (andResult.includes(tool.id)) {
    console.log(tool.name);
  }
});
let orResult = new Set(invertedIndex[tokens[0]] || []);
tokens.forEach((token, index) => {
  if (index === 0) return;
  const result = invertedIndex[token]||[];
  result.forEach((id) => {
    orResult.add(id);
  });
});
tools.forEach((tool) => {
  if (orResult.has(tool.id) && !andResult.includes(tool.id)){
   console.log(tool.name)
  }
});

