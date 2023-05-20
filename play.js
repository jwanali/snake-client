
const {connect} = require("./client");
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function () {
  
  if ( setupInput === '\u0003') {
    process.exit();
  }
};

const stdin = process.stdin;

stdin.on("data", handleUserInput);

console.log("Connecting ...");
connect();