const fs = require("fs");
const path = require("path");

fs.appendFile(path.join(__dirname, "text.txt"), "Hi", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  } 
});

fs.readFile(__dirname + "/text.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data, "Success!");
  }
});

fs.writeFile(__dirname + "/text.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  } 
});

fs.rename(__dirname + "/text.txt", __dirname + "/otherText.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  }
});

fs.unlink(__dirname + "/text.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  }
});