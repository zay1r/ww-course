const week = [
  { day: "Monday", plannedHours: 3 },
  { day: "Tuesday", plannedHours: 2 },
];

let total = 0;

for (let i = 0; i <= week.length - 1; i++) {
  total = total + week[i].plannedHours;
}

console.log("Total:", total);
