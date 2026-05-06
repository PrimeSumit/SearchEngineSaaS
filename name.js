import fs from "fs";
import tools from "./tools_clean.json" with { type: "json" };
const names = tools.map((tool) => tool.name);
const hasDup = names.length !== new Set(names).size;
console.log(hasDup);
