const constants = require('./constants')

/*
const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, SAY_FUN_KEY, SAY_GO_KEY, SAY_HI_KEY, SAY_OH_NO_KEY, SAY_OOH_KEY } = require("./constants");
*/
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  stdin.on("data", handleUserInput);
  

  return stdin;
};
const handleUserInput = function (data) {

  
  if (data === '\u0003') {// press ctrl + c to exit
    process.exit();
  } else if(constants.CONTROLS[data]) {
    connection.write(constants.CONTROLS[data]); // moving
    
  } else if(constants.MESSAGES[data]) {
    connection.write(constants.MESSAGES[data]);// say message
  } else {
    connection.write(constants.MESSAGES.unNone);// unone message
    
  }
 
 

};



module.exports = {
  setupInput
}