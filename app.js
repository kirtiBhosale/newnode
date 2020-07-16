var express = require('express');
var app = express();
var http = require('http').Server(app);
require('dotenv').config();

express.static('public')

app.get('/', function(req, res){
 // res.sendFile('F:/2700439/NodeJs/AppPages' + '/MyPage.html');
 res.send("hello world");
});
//app.post('/', function(req, res) {
  //  var item = req.body.userSearchInput;
    //console.log(item);
//});

http.listen(process.env.port, function(){
  console.log('listening on *:3000');
});