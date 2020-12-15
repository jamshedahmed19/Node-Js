// Same as Javascipt
const greet = (name) => {
  console.log(`Hello, ${name}`);
};

// greet("Jamshed");
// greet("Ahmed");
// ------------------

// Global Object same as Window object in browser, apart from dom functions
//console.log(global);

// setTimeout(() => {
//   greet("Jamshed");
//   clearInterval(interval);
// }, 3000);

// const interval = setInterval(() => {
//     greet("Ahmed");
// }, 1000)

// console.log(__filename);
// console.log(__dirname);
// -----------------------

// Modules and Require
//const cities = require("./Cities");
// It will return empty Object If we don't export cities from Cities.js
//console.log(cities);
//Destructuring, but name should be same as in module
// const {cities, countries, } = require("./Cities");
// console.log(cities, countries);
// Built in modules
// const OS = require("os");
// console.log(OS.homedir(), OS.platform(), OS.hostname());
// ------------------------

// File System Module
const fs = require("fs");
// console.log(fs);
// Directories
// if (!fs.existsSync("./docs")) {
//   fs.mkdir("./docs", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Folder created");
//     }
//   });
// } else {
//   fs.rmdir("./docs", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Folder deleted");
//     }
//   });
// }
// ----------------------

// Writing File
// fs.writeFile("./docs/blog1.txt", "hello, world! :)", () => {
//     console.log("File Written Successfully!");
// })
// fs.writeFile("./docs/blog2.txt", "hello, again! ;)", () => {
//     console.log("File Written Successfully!");
// })
// ---------------------------

// Reading File
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });
// fs.readFile("./docs/blog2.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });
// -------------------------

// Deleting Files
// if (fs.existsSync("./docs/blog2.txt")) {
//   fs.unlink("./docs/blog2.txt", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File was deleted");
//     }
//   });
// }
// --------------------------

// File Stream
// const readStream = fs.createReadStream("./docs/blog3.txt", {
//   encoding: "utf-8",
// });

// const writeStream = fs.createWriteStream("./docs/blog4.txt")

// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeStream.write(chunk);
// });

//or 

readStream.pipe(writeStream);
