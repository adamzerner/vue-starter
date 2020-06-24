export default (startDate, endDate) => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  return (
    (this._treatDateAsUTC(endDate) - this._treatDateAsUTC(startDate)) /
    millisecondsPerDay
  );
};
