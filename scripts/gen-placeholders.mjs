// One-off generator for themed project thumbnail placeholders.
// Run with: node scripts/gen-placeholders.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, "../public/images/projects");
mkdirSync(outDir, { recursive: true });

const projects = [
  { file: "helix", title: "Helix Analytics", from: "#0b1120", to: "#1d4ed8" },
  { file: "orbit", title: "Orbit Design System", from: "#111a2e", to: "#3b82f6" },
  { file: "nimbus", title: "Nimbus Deploy CLI", from: "#0b1120", to: "#38bdf8" },
  { file: "pulse", title: "Pulse Mobile Banking", from: "#0b1120", to: "#0ea5e9" },
  { file: "atlas", title: "Atlas Knowledge Graph", from: "#131c33", to: "#6366f1" },
  { file: "echo", title: "Echo Realtime Chat", from: "#0b1120", to: "#22d3ee" },
];

const svg = ({ title, from, to }) => `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="${title} thumbnail placeholder">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${from}"/>
      <stop offset="1" stop-color="${to}"/>
    </linearGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.5" fill="#ffffff" opacity="0.1"/>
    </pattern>
  </defs>
  <rect width="800" height="450" fill="url(#g)"/>
  <rect width="800" height="450" fill="url(#dots)"/>
  <g fill="none" stroke="#ffffff" stroke-opacity="0.7" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" transform="translate(400 175)">
    <path d="M-70 -34 -110 6 -70 46"/>
    <path d="M70 -34 110 6 70 46"/>
    <path d="M-14 70 22 -70"/>
  </g>
  <text x="400" y="330" text-anchor="middle" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#ffffff">${title}</text>
  <text x="400" y="372" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="500" fill="#ffffff" opacity="0.75">Add project image</text>
</svg>
`;

for (const p of projects) {
  writeFileSync(resolve(outDir, `${p.file}.svg`), svg(p));
}

console.log(`Generated ${projects.length} placeholders in ${outDir}`);
