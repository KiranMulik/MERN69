const fs = require("fs");

// Readable stream
const readable = fs.createReadStream("input.txt", {
  encoding: "utf8"
});

// Writable stream
const writable = fs.createWriteStream("output.txt");

// Read data and display it
readable.on("data", (chunk) => {
  console.log("Reading:", chunk);
});

// Pipe readable → writable
readable.pipe(writable);

writable.on("finish", () => {
  console.log("File copied successfully!");
});
