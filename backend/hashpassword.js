const bcrypt = require("bcryptjs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter admin password: ", async (password) => {
  const hash = await bcrypt.hash(password, 12);
  console.log("\nPassword hash:\n" + hash);
  rl.close();
});
