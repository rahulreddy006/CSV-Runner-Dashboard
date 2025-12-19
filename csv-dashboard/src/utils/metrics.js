export const calculateMetrics = (data) => {
  if (!data.length) return null;

  const miles = data.map(d => d.miles);
  const total = miles.reduce((a, b) => a + b, 0);

  return {
    average: (total / miles.length).toFixed(2),
    min: Math.min(...miles),
    max: Math.max(...miles),
  };
};
