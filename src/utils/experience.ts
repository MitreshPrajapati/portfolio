import type { TimelineEntry } from "../types";

const toMonthIndex = (value: string) => {
  const [year, month] = value.split("-").map(Number);
  return year * 12 + month - 1;
};

export function calculateExperience(experience: TimelineEntry[], now = new Date()) {
  const currentMonth = now.getFullYear() * 12 + now.getMonth();
  const intervals = experience
    .filter((item) => item.startDate)
    .map((item) => ({
      start: toMonthIndex(item.startDate as string),
      end: item.endDate ? toMonthIndex(item.endDate) : currentMonth,
    }))
    .sort((a, b) => a.start - b.start);

  const merged = intervals.reduce<Array<{ start: number; end: number }>>((result, interval) => {
    const previous = result.at(-1);
    if (previous && interval.start <= previous.end + 1) previous.end = Math.max(previous.end, interval.end);
    else result.push({ ...interval });
    return result;
  }, []);

  const totalMonths = merged.reduce((sum, interval) => sum + interval.end - interval.start + 1, 0);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (!years) return `${months} mo${months === 1 ? "" : "s"}`;
  if (!months) return `${years} yr${years === 1 ? "" : "s"}`;
  return `${years} yrs ${months} mos`;
}
