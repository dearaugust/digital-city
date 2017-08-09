var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Post = require('./models/post');
mongoose.connect('mongodb://192.168.1.105:27017/express-kiss-api');
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  var post = new Post({title: 'mongoose usage'});
  post.save(function(err){
   if(err) console.log(err);
  })
  console.log('success!')
});
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
