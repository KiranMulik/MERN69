const path = require("path");

const filePath = path.join("documents", "node", "hello.txt");

console.log("File path:", filePath);
console.log("File name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));
