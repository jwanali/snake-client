const { MOVE_UP_KEY,MOVE_DOWN_KEY,MOVE_LEFT_KEY,MOVE_RIGHT_KEY,SAY_FUN_KEY,SAY_GO_KEY,SAY_HI_KEY,SAY_OH_NO_KEY,SAY_OOH_KEY } = require("./constants");
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  stdin.on("data", handleUserInput);
  //console.log(stdin);

  return stdin;
};
const handleUserInput = function (data) {

  if (data === '\u0003') {
    process.exit();
  } else if (data === 'w') {
    connection.write(`Move: ${MOVE_UP_KEY}`);
  } else if (data === 's') {
    connection.write(`Move: ${MOVE_DOWN_KEY}`);
  } else if (data === 'a') {
    connection.write(`Move: ${MOVE_LEFT_KEY}`);
  } else if (data === 'd') {
    connection.write(`Move: ${MOVE_RIGHT_KEY}`);
  }else switch (data) {
    case 'h': connection.write(`Say: ${SAY_HI_KEY}`)

      break;
    case 'g': connection.write(`Say: ${SAY_GO_KEY}`)

      break;
    case 'n': connection.write(`Say: ${SAY_OH_NO_KEY}`)

      break;
    case 'o': connection.write(`Say: ${SAY_OOH_KEY}`);


      break;
    case 'f': connection.write(`Say: ${SAY_FUN_KEY}`)

      break;

    default: connection.write(`Say: ${data}`);
      break;
  }

};



module.exports = {
  setupInput
}