const net = require("net");
//const { setTimeout } = require("timers/promises");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost" ,
    port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    
    conn.write("Name: J.L");
  });

  
  conn.on('connect', () => {


  /*  
  setInterval(() => {
    conn.write("Move: up");
  }, 50);
  setInterval(() => {
    conn.write("Move: right");
  }, 50);
  
    clearInterval;
    */
  })
  
  conn.on('data',(data) => {
    console.log("Server says",data);
  })

 
  
  
   
  return conn;
};
module.exports = {
  connect,
}