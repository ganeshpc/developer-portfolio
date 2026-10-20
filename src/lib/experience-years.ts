import { careerStart } from "@/data/profile";

export function yearsOfExperience(asOf: Date) {
  let years = asOf.getFullYear() - careerStart.year;
  if (asOf.getMonth() + 1 < careerStart.month) years -= 1;
  return Math.max(years, 0);
}

export function experienceSummary(years: number) {
  return `I'm a software engineer with ${years}+ years of experience building backend services, full-stack applications, and distributed systems. I enjoy solving complex problems and turning ideas into useful products.`;
}

export async function getYearsOfExperience() {
  "use cache";
  return yearsOfExperience(new Date());
}
