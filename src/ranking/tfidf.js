import tokenize from "../processing/tokenizer.js";
import invertedIndex from "../index/buildIndex.js";
import idf from "../index/idf.js";

const query = "video meetings";
const tokens = tokenize(query);
const search = {};
export default search;
tokens.forEach((token) => {
  Object.entries(invertedIndex[token]).forEach((entry) => {
    const toolId = entry[0];
    const tf = entry[1];
    const score = tf * idf[token];
    if (!search[toolId]) {
      search[toolId] = score;
    } else {
      search[toolId] += score;
    }
  });
});
console.log(search);
