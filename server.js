// var MongoClient = require('mongodb').MongoClient
// var url = "mongodb://localhost:27017/testing";

// MongoClient.connect(url, function(err, db) {
//     if(err) throw err;
//     var myobj = {name: "Thabo",  Age: "28", address: "Mohalalitoe"};
//     db.collection("employees").insertOne(myobj, function(err, res) {
//         if(err) throw err;
//         console.log("1 record inserted");
//         db.close();
//     });
// });

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});