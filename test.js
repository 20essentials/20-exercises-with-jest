/*
  pnpm test 1     # Runs all tests in folder 1 or 01
  pnpm test 2     # Runs all tests in folder 2 or 02
  pnpm test 20    # Runs all tests in folder 20
*/

import { spawn } from "node:child_process";
import path from "node:path";
import { existsSync } from "node:fs";

const arg = process.argv[2];

if (!arg || isNaN(arg)) {
  console.error("Please provide the test folder number, e.g.: pnpm test 1");
  process.exit(1);
}

const padded = String(arg).padStart(2, "0"); // "01"
const plain = String(Number(arg));           // "1"

let testDir;
if (existsSync(path.resolve(padded))) {
  testDir = path.resolve(padded);
} else if (existsSync(path.resolve(plain))) {
  testDir = path.resolve(plain);
} else {
  console.error(`Test folder not found. Tried: "${padded}" and "${plain}"`);
  process.exit(1);
}

console.log("Running Jest tests in:", testDir);

const child = spawn(
  "node",
  [
    "--experimental-vm-modules",
    "./node_modules/jest/bin/jest.js",
    "--watch",
    testDir,
  ],
  {
    stdio: "inherit",
    shell: true,
  }
);

child.on("exit", (code) => process.exit(code));
