/**
 * One Line of Earned Pride
 *
 * A deterministic entry: it writes exactly one line of text to
 * /output/entry.txt and reads nothing from the network, the environment,
 * git history, or any file outside this repository.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// A quiet, earned moment: a mother learning to read hides how hard it was.
// "Makes it" carries the struggle; restoring the creases is the unspoken pride.
const ENTRY =
  "Rosa makes it to the last line of her son's letter without once stopping to sound out a word, then folds it back along the old creases so he'll never know she practiced.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_LENGTH = 240;

function main(): void {
  const length = [...ENTRY].length;
  if (length < 1 || length > MAX_LENGTH) {
    throw new Error(`Entry must be between 1 and ${MAX_LENGTH} characters.`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
}

main();
