const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();

const currentMonth = date.getMonth();

const getMonthName = monthNames[currentMonth];

export default getMonthName;
