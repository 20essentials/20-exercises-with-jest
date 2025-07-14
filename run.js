/*
pnpm start 1     # Runs the main .js file in folder 1
pnpm start 2     # Runs the main .js file in folder 2
pnpm start 20    # Runs the main .js file in folder 20
*/

import { spawn } from 'node:child_process';

const arg = process.argv[2];

if (!arg || isNaN(arg)) {
  console.error('Please provide the exercise number. Example: pnpm start 1');
  process.exit(1);
}

const path = `${arg}/exercise-${arg}.js`;

const child = spawn('node', ['--watch', `--watch-path=${arg}`, path], {
  stdio: 'inherit'
});

child.on('exit', code => process.exit(code));
