const path = require("path");
const fs = require("fs");
const app = fs
  .readFileSync(path.join(process.cwd(), "src/app.js"), "utf8")
  .trim()
  .split("\n");

let keep = true;
const submit = app
  .reduce((lines, a) => {
    const trimmed = a.trim();
    let isComment = false;
    if (trimmed === "// remove start" || trimmed.startsWith("/*")) {
      keep = false;
      isComment = true;
    }
    if (trimmed === "// remove end" || trimmed.startsWith("*/")) {
      keep = true;
      isComment = true;
    }
    if (!keep || isComment) {
      return lines;
    }
    return lines.concat(a);
  }, [])
  .join("\n");

fs.writeFileSync(path.join(process.cwd(), "index.js"), submit, {
  encoding: "utf8",
});
