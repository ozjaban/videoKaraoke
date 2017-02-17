var express = require('express');
var app = express();
const hostname = '127.0.0.1';
const port = 8090;

app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));

app.get('/', function(req, res){
  res.sendFile( __dirname + "/html/" + "index.html" );
});

app.listen(port, hostname, function(err){
   console.log("Started VideoKaraoke resource server at http://%s:%s", hostname, port)
});
