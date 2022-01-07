const mysql = require("mysql");
const Promise = require("bluebird");
const Connection = require("mysql/lib/Connection");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project1",
  };

  async function connectionCheck(){
      const connection = mysql.createConnection(dbinfo);
      await connection.connectAsync();
      console.log("connection successful");
      await connection.endAsync();
  }

  async function addMessage(chatapp){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connection successful");
    
    let sql = `insert into chatapp(message) values(?)`;
    await connection.queryAsync(sql,[chatapp.message]);
    await connection.endAsync();
}

async function selectMessage(chatapp){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connection successful");
    
    let sql = `select * from chatapp`;
    const list = await connection.queryAsync(sql,[]);
    await connection.endAsync();
    console.log(list);
    return list;
}

selectMessage();


module.exports = { addMessage,selectMessage };


// const chatapp ={
//     message : 'hiii'
// };

//  addMessage(chatapp);


//   connectionCheck();