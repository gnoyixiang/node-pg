const path = require("path");
const fs = require("fs");
const out = fs
  .readFileSync(path.join(process.cwd(), "io/out.txt"), "utf8")
  .trim()
  .split("\n")
  .map((a) => a.trim());
const ans = fs
  .readFileSync(path.join(process.cwd(), "io/ans.txt"), "utf8")
  .trim()
  .split("\n")
  .map((a) => a.trim());

if (out.length !== ans.length) {
  console.log("Wrong: out.length !== ans.length");
}

const total = out.length;
let wrong = 0;
for (let i = 0; i < total; i++) {
  if (out[i] !== ans[i]) {
    console.log(`Wrong: At line ${i + 1}`);
    console.log(`       out: ${out[i]}`);
    console.log(`       ans: ${ans[i]}`);
    wrong++;
  }
}

console.log(`Total: ${total}`);
console.log(`Correct: ${total - wrong}`);
console.log(`Wrong: ${wrong}`);
