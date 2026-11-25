import { mkdirSync, writeFileSync } from "node:fs";

// One funny line of awkward robot small talk, spoken in an elevator.
const line =
  "I've calculated a 94% chance this silence is awkward. I will now stand perfectly still until the doors open to avoid increasing it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
