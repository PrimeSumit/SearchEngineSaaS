import tools from "../../data/tools_clean.json" with { type: "json" };

export default function tokenize(text) {
  const token = text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(" ")
    .filter((word) => word !== "");

  return token;
}
