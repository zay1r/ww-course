// BUG HUNT 5
// A client typed these prices into a form on their website.
// What it should do: add them up and print the total.
// Expected output:
//   Total: 45.5

const prices = ['20', '15.50', '10'];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}

console.log('Total:', total);
