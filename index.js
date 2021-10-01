// Logic for the days count

const d = new Date();
let todaysDate = d.getDate() - 1 ;
let todaysMonth = d.getMonth();
let thisYear = d.getFullYear();
let thisMonth, goneDays;
let DaysInOct = 31
let DaysInNov = 30
let DaysInDec = 31
let totalDates;


if (todaysMonth == 9) { goneDays = todaysDate }
if (todaysMonth == 10) { goneDays = todaysDate + DaysInOct }
if (todaysMonth == 11) { goneDays = todaysDate + DaysInOct + DaysInNov }

totalDates = (DaysInOct + DaysInNov + DaysInDec) - goneDays

document.querySelector('.leftdays').innerHTML = totalDates
