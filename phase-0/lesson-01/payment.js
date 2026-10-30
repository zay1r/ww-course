const order = [
  { item: "Espresso shot", priceCents: 110 },
  { item: "Oat cookie", priceCents: 220 },
];
const paidCents = 330;

let totalCents = 0;
for (let i = 0; i < order.length; i++) {
  totalCents = totalCents + order[i].priceCents;
}

if (totalCents === paidCents) {
  console.log("Paid in full");
} else {
  console.log("Payment mismatch! Owed:", totalCents, "Paid:", paidCents);
}

console.log("Receipt total: $" + (totalCents / 100).toFixed(2));
