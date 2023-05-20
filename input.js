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
    connection.write("Move: up");
  } else if (data === 's') {
    connection.write("Move: down");
  } else if (data === 'a') {
    connection.write("Move: left");
  } else if (data === 'd') {
    connection.write("Move: right");
  }
  switch (data) {
    case 'h': connection.write(`Say: hi`)

      break;
    case 'g': connection.write(`Say: go`)

      break;
    case 'n': connection.write(`Say: Oh No`)

      break;
    case 'o': connection.write(`Say: oooh`);


      break;
    case 'f': connection.write(`Say: fun`)

      break;

    default:
      break;
  }

};



module.exports = {
  setupInput
}