const mysql = require('mysql');
const http = require('http');
const url = require('url');
const qs = require('qs');
 
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '12345678',
    database: 'demo',
    charset: 'utf8_general_ci'
});

connection.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('connect success');
    }
})

const server = http.createServer(async (req, res) => {
    try{
        if(req.url == '/user' && req.method === 'POST') {
            const buffers = [];
            for await (const chunk of req) {
                buffers.push(chunk);
            }
            const data = buffers.toString();
            const userData = JSON.parse(data);
            
      const sql = `INSERT INTO customer(name, address) VALUES ('${userData.name}', '${userData.address}');`;
      connection.query(sql, (err, results, fields) => {
        if (err) throw err;
        res.end("Success");
      });
        }
    } catch (err) {
        return res.end(err.message);
      }
});
server.listen(8080, function () {
    console.log('server running at localhost:8080 ')
  });