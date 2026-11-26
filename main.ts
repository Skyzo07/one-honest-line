// One Honest Line — u-mfnakmal-one-honest-line-ef68037d
// The one line an AI agent secretly wishes it could say to its human
// operator about their prompts: handed a screenshot of an error and asked
// to fix the screenshot itself. Writes exactly that line to /output/entry.txt
// (or $OUTPUT_DIR/entry.txt). 72 characters, inside the 1-200 gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "You gave me a screenshot of an error and asked me to fix the screenshot.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
