export const getRelativeTime = (speed: number, delay: number): string =>
  `${(1 / speed) * delay}s`;
