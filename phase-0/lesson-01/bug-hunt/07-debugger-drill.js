// DEBUGGER DRILL (there is no bug in this file)
// Answer the questions in bug-reports.md using only the debugger.
// Don't add any console.log, and don't edit this file.

let balance = 0;

for (let day = 1; day <= 30; day++) {
  const deposit = ((day * 7) % 13) + day;
  balance = balance + deposit;
}

console.log("Final balance:", balance);
