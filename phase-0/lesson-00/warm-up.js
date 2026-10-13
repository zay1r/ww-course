const x = { a: 1, b: 2 };

const array = [
  { day: "Monday", PlannedHours: 3, focus: "JavaScript" },
  { day: "Tuesday", PlannedHours: 2, focus: "TypeScript" },
  { day: "Thursday", PlannedHours: 4, focus: "Setup Code" },
];

console.log("The first day is", week[0].day);
console.table(week);

let hours = 0;

const test = week[0].plannedHours;
console.log(test);

for (let i = 0; i < week.length; i++) {
  let temphours = hours + week[i].plannedHours;
  hours = temphours;
  console.log("This is passover", i);
  console.log("Hours is", hours);
  console.log("Temp hours is", temphours);
}

console.log("Total hours: ", hours);
