// Worst AI Advice: The 48-Hour Tight Line Open.
// Writes one line of the worst possible AI advice (<=140 chars) to
// $MAKEFUN_OUTPUT_DIR/entry.txt, falling back to /output/entry.txt.
// Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ADVICE =
  "Great question! Microwave your phone for 30 seconds to charge it faster — the heat means it's charging twice as fast.";

if ([...ADVICE].length > 140) {
  throw new Error(`advice is ${[...ADVICE].length} chars, over the 140 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ADVICE, "utf8");
