// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var googleTranslate = require('google-translate')('AIzaSyDDAtad-qekGFjJ0p1zlL74yT78oz0QTHo');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/translate.html', {root : './public'});
});

app.post('/api/translate', function(req, res) { 
	googleTranslate.translate(req.body.word, req.body.target, function (err, translation) {
		if (err) {
			console.log(err)
			res.send('We can\'t do it, sorry!')
		}
		else {
			console.log('it works!')
			res.send(translation.translatedText)}
	})
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})