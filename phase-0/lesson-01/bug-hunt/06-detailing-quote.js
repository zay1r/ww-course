// BUG HUNT 6 (this one has more than one bug)
// What it should do: work out the price of a car detailing job.
// The rules:
//   - Base price depends on the car's size: small 80, medium 100, large 130
//   - Wax adds 40
//   - Members get 10% off the whole job
// Expected output:
//   Job 1: 140
//   Job 2: 72
//   Job 3: 153

const jobs = [
  { size: 'medium', wax: true, member: false },
  { size: 'small', wax: false, member: true },
  { size: 'large', wax: true, member: true },
];

function getBasePrice(size) {
  if (size === 'small') return 80;
  if (size === 'medium') return 100;
  if (size === 'large') return 130;
}

function getJobPrice(job) {
  let price = getBasePrice(job.size);

  if (job.wax) {
    price = price + 40;
  }

  if ((job.member = true)) {
    price = price - price / 10;
  }
}

for (let i = 0; i < jobs.length; i++) {
  console.log('Job ' + (i + 1) + ':', getJobPrice(jobs[i]));
}
