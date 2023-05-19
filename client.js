const net = require("net");
//const { setTimeout } = require("timers/promises");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost" ,
    port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    //console.log('"Move: up" - move up one square (unless facing down)');
    //conn.write("Move: up");
    conn.write("Name: J.L");


    
  });
  
  conn.on("connect", (data) => {
    /*
    setInterval(() => {
      conn.write("Move: down");
    },400);
    
    setInterval(() => {
      conn.write("Move: left");
    },50);
    setInterval(() => {
      conn.write("Move: up");
    },50);
    setInterval(() => {
      conn.write("Move: right");
    },50)
   clearInterval;
   */
  });
  
  
   
  return conn;
};
module.exports = {
  connect,
}