import { writeFile, appendFile } from "node:fs/promises";
import { randomInt } from "node:crypto";
import { exec } from "node:child_process";

const generateRandomNumbers = (count: number): number[] => {
  const numbers: number[] = [];
  for (let i = 0; i < count; i++) {
    numbers.push(randomInt(0, 256)); // Generates a random integer from 0 to 255
  }
  return numbers;
};

if (process.argv.length < 3 || isNaN(parseInt(process.argv[2]))) {
  console.error("Please provide a valid size as a command line argument.");
  process.exit(1);
}

const size = parseInt(process.argv[2]);
const total = size * size;
const times: number[] = [];
for (let i = 0; i < 50; i++) {
  await writeFile("input.txt", `${size} ${size}\n`); // Clear the file before writing

  const randomNumbers = generateRandomNumbers(total);
  const data = randomNumbers.join(" ");
  await appendFile("input.txt", data);
  console.log("starting execution", i + 1);
  const start = performance.now();
  // wait for execution to complete
  await new Promise<void>((resolve, reject) => {
    exec(`LBYARCH < input.txt > output.txt`, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
  const end = performance.now();
  times.push(end - start);
}

const averageTime = times.reduce((a, b) => a + b, 0) / times.length;
await writeFile(
  `times-${Date.now()}.json`,
  JSON.stringify({ size, averageTime, times }, null, 2)
);

export {};
