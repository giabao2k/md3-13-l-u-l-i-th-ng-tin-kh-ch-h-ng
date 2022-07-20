// const mysql = require('mysql');
// const connecttion = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '12345678',
//     database: 'demo',
//     charset: 'utf8_general_ci'
// });

// connecttion.connect(function(err) {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('connet success');
//         const sql = "CREATE TABLE customer (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,name varchar(30) not null, address varchar(30))";
//         connection.query(sql, function (err) {
//         if (err) {
//             console.log(err);
//         };
//         console.log('Create table success');
//         connection.end();
//         });
//         return;
//     }
// })
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'demo',
  charset: 'utf8_general_ci'
});

connection.connect(function (err) {
  if (err) {
    throw err.stack;
  }
  else {
    console.log("connect success");
    const sql = "CREATE TABLE customer (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,name varchar(30) not null, address varchar(30))";
    connection.query(sql, function (err) {
      if (err) {
        console.log(err);
      };
      console.log('Create table success');
      connection.end();
    });
    return;
  }
})