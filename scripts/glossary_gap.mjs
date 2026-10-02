// Lists terms the site uses (js/data.js) that no glossary entry covers.
// Usage: node scripts/glossary_gap.mjs [extra-term ...]
// Candidates = mixed-case/acronym tokens plus a phrase list; output sorted by frequency.
import fs from "node:fs";
import vm from "node:vm";

globalThis.window = {};
vm.runInThisContext(fs.readFileSync(new URL("../js/data.js", import.meta.url), "utf8") + ";globalThis.D=DATA;");
const glossary = D.glossary.map(g => g.term.toLowerCase());
const text = JSON.stringify({ ...D, glossary: undefined }).replace(/https?:[^"]+/g, "");
const lower = text.toLowerCase();

const PHRASES = [
  "grounding", "dlp", "oversharing", "sensitivity label", "permission trimming", "semantic label", "legal hold", "audit log",
  "mcp gateway", "webhook", "mcp and api catalog", "github actions", "graphql", "delta query", "throttling",
  "delegated permission", "admin consent",
  "sharepoint", "itsm", "servicenow", "crm", "hr system",
  "sast", "coding agent",
  "gcc high", "gcc", "dod",
  "togaf adm", "dodaf", "ov-1", "ov-2", "ov-3", "ov-5b", "cv-2", "sv-1", "sv-2", "sv-4", "sv-6", "div-2", "stdv-1",
  ...process.argv.slice(2).map(s => s.toLowerCase()),
];

const counts = {};
for (const t of text.match(/\b[A-Z][A-Za-z]*[A-Z][A-Za-z0-9-]*\b/g) || []) counts[t] = (counts[t] || 0) + 1;
for (const p of PHRASES) { const n = lower.split(p).length - 1; if (n) counts[p] = n; }

const covered = t => glossary.some(g => g.includes(t.toLowerCase()));
const gap = Object.entries(counts).filter(([t]) => !covered(t)).sort((a, b) => b[1] - a[1]);
console.log(`${gap.length} candidate terms not in the ${glossary.length}-term glossary:\n`);
console.log(gap.map(([t, n]) => `${t} (${n})`).join("\n"));
