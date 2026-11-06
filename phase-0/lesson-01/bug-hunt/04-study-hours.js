// BUG HUNT 4
// What it should do: add up the planned study hours for the week.
// Expected output:
//   Total planned hours: 9

const week = [
  { day: 'Monday', plannedHours: 3 },
  { day: 'Tuesday', plannedHours: 2 },
  { day: 'Thursday', plannedHours: 4 },
];

let total = 0;

for (let i = 0; i < week.length; i++) {
  total = total + week[i].PlannedHours;
}

console.log('Total planned hours:', total);
