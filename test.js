/*
  pnpm test 1     # Runs all tests in folder 1
  pnpm test 2     # Runs all tests in folder 2
  pnpm test 20    # Runs all tests in folder 20
*/

import { spawn } from "node:child_process";
import path from "node:path";

const arg = process.argv[2];
if (!arg || isNaN(arg)) {
  console.error("Please provide the test folder number, e.g.: pnpm test 1");
  process.exit(1);
}

const testDir = path.resolve(arg);
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
