// BUG HUNT 3
// What it should do: print each appointment's client name and time.
// Expected output:
//   Dana at 9:00
//   Luis at 10:30
//   Mei at 13:00

const appointments = [
  { client: { name: 'Dana' }, time: '9:00' },
  { client: { name: 'Luis' }, time: '10:30' },
  { client: { name: 'Mei' }, time: '13:00' },
];

for (let i = 0; i < appointments.length; i++) {
  const appointment = appointments[i];
  console.log(appointment.customer.name + ' at ' + appointment.time);
}
