export const convertPopularityRating = popularity => {
  return Number(popularity / 1000).toFixed(0);
};
