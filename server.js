var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


app.get('*', function(req, res) {
    res.sendfile(__dirname + '/public/index.html'); // load our public/index.html file
});



var port = process.env.PORT || 8080; 
app.listen(port);

console.log('Server running on ' + port);