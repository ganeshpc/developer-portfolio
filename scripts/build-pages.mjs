import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const staticRoutes = [
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "src/app/opengraph-image.tsx",
];
const experienceFile = "src/lib/experience-years.ts";

const originals = new Map();

for (const file of staticRoutes) {
  const source = readFileSync(file, "utf8");
  if (source.includes('export const dynamic = "force-static"')) continue;
  originals.set(file, source);
  writeFileSync(file, `export const dynamic = "force-static";\n\n${source}`);
}

const experienceSource = readFileSync(experienceFile, "utf8");
originals.set(experienceFile, experienceSource);
const asOf = new Date();
const year = asOf.getFullYear();
const month = asOf.getMonth() + 1;
writeFileSync(
  experienceFile,
  experienceSource.replace(
    `export async function getYearsOfExperience() {
  "use cache";
  return yearsOfExperience(new Date());
}`,
    `export async function getYearsOfExperience() {
  return yearsOfExperience(new Date(${year}, ${month - 1}, 1));
}`,
  ),
);

const result = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
    NEXT_PUBLIC_BASE_PATH: "/developer-portfolio",
    NEXT_PUBLIC_SITE_URL: "https://ganeshpc.github.io/developer-portfolio",
  },
});

for (const [file, source] of originals) {
  writeFileSync(file, source);
}

process.exit(result.status ?? 1);
