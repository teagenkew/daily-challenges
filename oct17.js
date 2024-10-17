// // =============== getMonthName ========================

function getMonthName(mo) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (mo < months.length) {
    return "that is not a valid month";
  }
  for (let i = 0; i < mo.length; i++) {
    if (i === mo) {
      return months[mo];
    }
  }
}
console.log(getMonthName(0));

// // =====================================================

function getMonthName2(mo) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (mo < 1 || mo > months.length) {
    return "this is not a valid month";
    // for the case mo = 0 or 13.
  }
  for (let i = 1; i <= months.length; i++) {
    if (i == mo) {
      return months[i - 1];
    }
  }
}

console.log(getMonthName2(3));
