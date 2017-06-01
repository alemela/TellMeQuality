var express = require ('express');
var app = express();
var morgan = require ('morgan')
var bodyParser = require('body-parser');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
var compression = require('compression');
var request = require('request');
var apicache = require('apicache').options({debug:false}).middleware


//NEXT TWO LINES FOR READ BODY FROM POST
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(compression());

app.use('/',express.static('.', { maxAge: 86400000 }));
app.use(morgan('common'))

app.get('/measure', function (req, res) {
  res.sendFile( __dirname + "/views/measure.html" );
})
app.get('/measure/accuracy', function (req, res) {
  res.sendFile( __dirname + "/views/measure_detail.html" );
})
app.get('/measure/completness', function (req, res) {
  res.sendFile( __dirname + "/views/measure_detail.html" );
})
app.get('/measure/consistency', function (req, res) {
  res.sendFile( __dirname + "/views/measure_detail.html" );
})
app.get('/measure/credibility', function (req, res) {
  res.sendFile( __dirname + "/views/measure_detail.html" );
})
app.get('/measure/compliance', function (req, res) {
  res.sendFile( __dirname + "/views/measure_detail.html" );
})

app.get('/result', function (req, res) {
  res.sendFile( __dirname + "/views/datavisualization.html"  );
})
app.get('/result/accuracy', function (req, res) {
  res.sendFile( __dirname + "/views/datavisualization_detail.html" );
})
app.get('/result/completness', function (req, res) {
  res.sendFile( __dirname + "/views/datavisualization_detail.html"  );
})
app.get('/result/consistency', function (req, res) {
  res.sendFile( __dirname + "/views/datavisualization_detail.html" );
})
app.get('/result/credibility', function (req, res) {
  res.sendFile( __dirname + "/views/datavisualization_detail.html"  );
})
app.get('/result/compliance', function (req, res) {
  res.sendFile( __dirname + "/views/datavisualization_detail.html"  );
})

app.get('/upload', function (req, res) {
  res.sendFile( __dirname + "/views/upload.html"  );
})

app.get('/wizard', function (req, res) {
  res.sendFile( __dirname + "/views/wizard.html"  );
})
app.get('/error', apicache('1 day'), function (req, res) {
  res.sendFile( __dirname + "/views/error.html" );
})
app.get('/tmq/:path*', function (req, res) {
  request('http://localhost:8085/'+ req.params.path + req.params[0], function (error, response, body) {
    if(error)
    {
      console.log("Invalid JSON file");
      res.send("JSON.parse(body)")
    }
    else
    {res.send(JSON.parse(body))};
  });
})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});
