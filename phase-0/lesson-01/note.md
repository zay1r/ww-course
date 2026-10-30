lesson 01 Debugging
Predict First:

1. NO the missing ) would cause a syntax error and the code would not run

these are log that can help me debug:

console.log('total:', total); // always label
console.log({ total, i }); // shortcut: prints { total: 5, i: 1 }
console.table(week); // arrays of objects, as a table
console.log(typeof price, price); // check the type when math looks wrong

Three habits:

Tag the part of the system ([checkout]), so you can search for it.
Use the right level: console.error for errors and console.warn for warnings, so they can be filtered from ordinary output.
Include the IDs and values someone would need to reproduce it, and never secrets or private data such as passwords, API keys or card numbers. Logs get read by many people and kept for a long time.

How to ask for help with a bug (industry standard):

What I'm trying to do.
What I expected to happen.
What actually happened. Paste the exact error. Don't describe it from memory.
What I've already tried.
The smallest piece of code that shows the problem.

Example of communicating a bug that I'm working on:

Status: checkout totals are off by a cent on some orders.
Impact: about 1 in 20 orders since this morning's deploy. No customer has been charged wrongly yet.
Doing: reproduced it; testing a fix that stores prices in cents.
Next update: 3:00 p.m., or sooner if anything changes.

Blameless Postmortem:

## Postmortem: <short title>

- **Summary:** what happened, in two sentences
- **Impact:** who or what was affected, and for how long
- **Timeline:** when it started, when it was noticed, when it was fixed
- **Root cause:** the defect, and why it existed
- **Contributing factors:** what let it reach users (no test, no review, no check)
- **What went well:** what helped catch it or fix it
- **Action items:** one fix, one prevent and one detect (below), each with an owner

The 5 Whys:

The 5 Whys comes from Toyota's factories. You keep asking "why?" until you reach something you can change in the process

Git change name:

git mv Navbar.jsx NavBar.jsx

Best practices:

Read the whole error before you change anything.
Change one thing at a time. If you change three things and it works, you don't know which one fixed it.
Don't keep a fix you don't understand. "It works now, but I don't know why" means the bug is still out there.
Fix the cause, not the symptom. If a value is undefined, find out why. Don't just hide it with an if.
Fix the first error first. Later errors are often caused by the first one.
Verify after fixing. Re-run the case that failed, plus one or two others.
Remove debug logs before you commit.
Take a break when you're stuck. Ten minutes away from the screen solves a surprising number of bugs.
Keep a bug journal. From now on, every real bug you hit goes into a bugs.md file at the root of ww-course: the symptom, the cause, and what you learned. Months from now, this is your answer to the interview question "tell me about a bug you fixed."
