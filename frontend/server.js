var express = require ('express');
var app = express();
var morgan = require ('morgan')
var bodyParser = require('body-parser');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
var router = require ("./backend/router.js")


//NEXT TWO LINES FOR READ BODY FROM POST
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(__dirname + '/.'));
app.use(morgan('common'))
// This responds with LICENSE when asking LICENSE
/*app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/Tell_Me_Quality_Client.html'));
});*/

app.get('/measure/accuracy', function (req, res) {
   res.sendFile( __dirname + "/views/detail/detail_fields.html" );
})
app.get('/measure/completness', function (req, res) {
   res.sendFile( __dirname + "/views/detail/detail_fields.html" );
})
app.get('/measure/consistency', function (req, res) {
   res.sendFile( __dirname + "/views/detail/detail_fields.html" );
})
app.get('/measure/credibility', function (req, res) {
   res.sendFile( __dirname + "/views/detail/detail_fields.html" );
})
app.get('/measure/compliance', function (req, res) {
   res.sendFile( __dirname + "/views/detail/detail_fields.html" );
})


app.get('/datavisualization/accuracy', function (req, res) {
   res.sendFile( __dirname + "/views/data_detail.html" );
})
app.get('/datavisualization/completness', function (req, res) {
   res.sendFile( __dirname + "/views/data_detail.html"  );
})
app.get('/datavisualization/consistency', function (req, res) {
   res.sendFile( __dirname + "/views/data_detail.html" );
})
app.get('/datavisualization/credibility', function (req, res) {
   res.sendFile( __dirname + "/views/data_detail.html"  );
})
app.get('/datavisualization/compliance', function (req, res) {
   res.sendFile( __dirname + "/views/data_detail.html"  );
})

app.get('/Tell_Me_Quality_Client', function (req, res) {
   console.log("Got a Tell_Me_Quality_Client request");
   res.sendFile( __dirname + "/" + "Tell_Me_Quality_Client.html" );
})

app.post('/file-upload', function(req, res) {
    console.log("File Uploaded");
    console.log(req.body);
    console.log(req.files);
    res.send();
});

app.post('/upload', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/uploads');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);

});

var server = app.listen(8080, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
