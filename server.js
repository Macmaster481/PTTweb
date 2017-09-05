var express = require('express');
var app = express();
var server = require('http').createServer(app);
/*var fs = require('fs');
var path = require('path');*/
var io = require('socket.io')(server);
const PORT=8080;  
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(express.static(__dirname + '/')); 
//redirect / to our index.html file
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

//when a client connects, do this
io.on('connection', function(client){
    console.log('Client connected...');
    client.on('afullclicked', function(database){
        console.log("A Full click recieved");
        var sql = "UPDATE tank SET amount=3 WHERE tank='A'";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record changed");
        //send a message to ALL connected clients
        io.emit('buttonUpdate',"tank A update to full");
      });
    });
    client.on('amedclicked', function(database){
        console.log("A medium click recieved");
        var sql = "UPDATE tank SET amount=2 WHERE tank='A'";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record changed");
        //send a message to ALL connected clients
        io.emit('buttonUpdate',"tank A update to med");
      });
    });
    client.on('alowclicked', function(database){
        console.log("A Low click recieved");
        var sql = "UPDATE tank SET amount=1 WHERE tank='A'";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record changed");
        //send a message to ALL connected clients
        io.emit('buttonUpdate',"tank A update to low");
      });
    });
    client.on('bfullclicked', function(database){
        console.log("B medium click recieved");
        var sql = "UPDATE tank SET amount=3 WHERE tank='B'";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record changed");
        //send a message to ALL connected clients
        io.emit('buttonUpdate',"tank B update to full");
      });
    });
    client.on('bmedclicked', function(database){
        console.log("B Full click recieved");
        var sql = "UPDATE tank SET amount=2 WHERE tank='B'";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record changed");
        //send a message to ALL connected clients
        io.emit('buttonUpdate',"tank B update to med");
      });
    });
    client.on('blowclicked', function(database){
        console.log("A Low click recieved");
        var sql = "UPDATE tank SET amount=1 WHERE tank='B'";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record changed");
        //send a message to ALL connected clients
        io.emit('buttonUpdate',"tank B update to low");
      });
    });
    client.on('cfullclicked', function(database){
        console.log("C Full click recieved");
        var sql = "UPDATE tank SET amount=3 WHERE tank='C'";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record changed");
        //send a message to ALL connected clients
        io.emit('buttonUpdate',"tank C update to full");
      });
    });
    client.on('cmedclicked', function(database){
        console.log("C medium click recieved");
        var sql = "UPDATE tank SET amount=2 WHERE tank='C'";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record changed");
        //send a message to ALL connected clients
        io.emit('buttonUpdate',"tank C update to med");
      });
    });
    client.on('clowclicked', function(database){
        console.log("C low click recieved");
        var sql = "UPDATE tank SET amount=1 WHERE tank='C'";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record changed");
        //send a message to ALL connected clients
        io.emit('buttonUpdate',"tank C update to low");
      });
    });

});



server.listen(PORT, function(){
  console.log('listening on *:8080');
}); 
