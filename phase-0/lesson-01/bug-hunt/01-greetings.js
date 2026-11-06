// BUG HUNT 1
// What it should do: print a greeting for each client.
// Expected output:
//   Welcome, Dana!
//   Welcome, Luis!
//   Welcome, Mei!

const clients = ['Dana', 'Luis', 'Mei'];

for (let i = 0; i < clients.length; i++) {
  console.log('Welcome, ' + clients[i] + '!';
}
