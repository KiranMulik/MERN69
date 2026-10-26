const domain = require("domain");

const myDomain = domain.create();

myDomain.on("error", (error) => {
  console.log("Error caught:", error.message);
});

myDomain.run(() => {
  console.log("Inside domain");

  throw new Error("Something went wrong!");
});
