import invertedIndex from "../index/buildIndex.js";
import tokenize from "../processing/tokenizer.js";

const query = "video meetings";

const tokens = tokenize(query);
tokens.forEach((token) => {
  const result = invertedIndex[token];
  console.log(result);
});
