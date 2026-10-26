const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter student name: ", (name) => {
    rl.question("Enter student age: ", (age) => {
        rl.question("Enter student branch: ", (branch) => {

            console.log("\n--- Student Details ---");
            console.log("Name:", name);
            console.log("Age:", age);
            console.log("Branch:", branch);

            rl.close();
        });
    });
});