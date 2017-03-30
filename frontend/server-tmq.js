var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
//NEXT TWO LINES FOR READ BODY FROM POST
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('common'));

app.post('/load', function(request, response) {
    if (request.body === undefined) {
        return response.status(400).end();
    }

    console.log(request.body);
    response.status(200).end();
});


app.get('/load/:path/', function (request, response) {
    if (request.params.path === "" || request.params.path === undefined) {
        return response.status(400).end();
    }
    console.log(request.params.path);
    response.status(200).end();
});


app.use(function(request, response) {
    response.status(404).end();
});

var server = app.listen(8070, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server listening at http://%s:%s', host, port);
});
