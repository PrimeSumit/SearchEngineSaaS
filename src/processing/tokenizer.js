import tools from "../../data/tools_clean.json" with { type: "json" };

const text = "zoom meeting app";
function tokentize(text) {
  const token = text.toLowerCase().split(" ");

  return token;
}
const result = tokentize(text);
console.log(result);
