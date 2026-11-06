const bookings = [
  { client: "  Dana Reyes", service: "full detail" },
  { client: "Luis Ortega", service: "wash" },
  { client: "Mei i", service: "interior" },
];

function getInitials(fullName) {
  const parts = fullName.trim(fullName.split(" "));
  const first = parts[0];
  const last = parts[1];
  return first[0] + last[0];
}

for (let i = 0; i < bookings.length; i++) {
  console.log(getInitials(bookings[i].client), "-", bookings[i].service);
}
