import invertedIndex from "./buildIndex.js";

const documentFrequency = {};
export default documentFrequency;

Object.keys(invertedIndex).forEach((token) => {
  const count = Object.values(invertedIndex[token]).length;
  documentFrequency[token] = count;
});
