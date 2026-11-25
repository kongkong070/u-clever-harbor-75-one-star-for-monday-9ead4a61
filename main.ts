// One Star for Monday — u-clever-harbor-75-one-star-for-monday-9ead4a61
// A one-star review of Monday as if it were a restaurant, written to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR). Never removing the output
// directory keeps this safe on the grader's bind-mounted /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. Monday served cold coffee, lukewarm Wi-Fi, and a meeting that could have been an email. Will not be returning.";

function fail(message: string): never {
  throw new Error(message);
}

// Gate: 1-180 UTF-8 characters, not only whitespace; the task caps the
// review at 25 words. Validate first, write only when it passes.
const chars = [...REVIEW].length;
if (REVIEW.trim().length === 0) fail("review is empty");
if (chars > 180) fail(`review is ${chars} chars, over the 180-char gate`);
if (REVIEW.trim().split(/\s+/).length > 25) fail("review exceeds 25 words");
if (REVIEW.includes("\n")) fail("review must be a single line");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), REVIEW, "utf8");
