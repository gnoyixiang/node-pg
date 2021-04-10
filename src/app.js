const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
// remove start
const { performance } = require("perf_hooks");
// remove end

let currentline = 0;
function readline() {
  return input[currentline++];
}

const T = readline();
for (let i = 1; i <= T; i++) {
  // remove start
  const t0 = performance.now();
  // remove end
  const ans = `Case #${i}: ${solve()}`;
  console.log(ans);
  // remove start
  const t1 = performance.now();
  checkPerformance(t0, t1, i);
  // remove end
}

function checkPerformance(t0, t1, i) {
  const limit = 20; // seconds
  const elapsed = (t1 - t0) / 1000; // seconds
  if (elapsed > limit) {
    console.warn(`Time exceeded for Case #${i}: ${elapsed} seconds`);
  }
}

// Solution
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
