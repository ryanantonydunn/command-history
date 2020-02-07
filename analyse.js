var fs = require("fs");

fs.readFile("history.txt", "utf8", (err, buffer) => {
  // count all instances of each command
  const counts = {};
  buffer.split("\n").forEach(line => {
    const command = line.substring(15);
    counts[command] = counts[command] || 0;
    counts[command]++;
  });

  // convert into a sorted list of commands
  const output = Object.entries(counts)
    .sort(([, countA], [, countB]) => countB - countA)
    .map(([command, count]) => `${count} | ${command}`)
    .join("\n");

  // write the result
  fs.writeFile("result.txt", output, () => {
    console.log("Success");
  });
});
