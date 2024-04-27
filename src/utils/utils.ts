export function diffDate(targetDate: Date): string {
  const now = new Date();
  const diff: number = Math.floor(
    (now.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );

  const formatter = new Intl.RelativeTimeFormat('tr', {
    style: 'short',
  });

  const farkFormatted = formatter.format(-diff, 'years');

  return farkFormatted;
}

export const calcAge = (date: Date): number => {
  return Math.floor(
    (new Date().getTime() - new Date(date).getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  );
};
