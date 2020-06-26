export default (startDate, endDate) => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  return (
    (treatDateAsUTC(endDate) - treatDateAsUTC(startDate)) / millisecondsPerDay
  );
};

const treatDateAsUTC = (date) => {
  let result = new Date(date);

  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());

  return result;
};
