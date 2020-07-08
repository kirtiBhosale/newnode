var express = require('express');
var app = express();
var http = require('http').Server(app);

express.static('public')

app.get('/', function(req, res){
  res.sendFile('F:/2700439/NodeJs/AppPages' + '/MyPage.html');
});
app.post('/', function(req, res) {
    var item = req.body.userSearchInput;
    console.log(item);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});