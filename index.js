const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let currentline = 0;
function readline() {
  return input[currentline++];
}

const T = readline();
for (let i = 1; i <= T; i++) {
  const ans = `Case #${i}: ${solve()}`;
  console.log(ans);
}

function solve() {
  const [N, K] = readline().split(" ");
  const S = readline();
  let k = 0;
  for (let i = 1; i <= N / 2; i++) {
    if (S[i - 1] !== S[N - 1 - i + 1]) {
      k++;
    }
  }
  return Math.abs(K - k);
}