var express = require("express");

var bodyParser = require("body-parser");

const PORT = process.env.port || process.env.PORT || 3000;

var app = express();
var points = [];
var hr;

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.get('/interviewer', (req, res) => {
	res.sendFile(__dirname + "/public/interviewer.html");
})

app.get('/index', (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
})

app.get('/interviewee', (req, res) => {
	res.sendFile(__dirname + "/public/interviewee.html");
})

app.get('/plot', (req, res) => {
	res.sendFile(__dirname + "/public/plot.html");
})

app.post('/plot', (req, res) => {
	//console.log("req>>",req.body);
	points.push(req.body);
	
})

app.post('/heart', (req, res) => {
	//console.log("req>>",req.body);
	hr = req.body;
	
})

app.get('/heart', (req, res) => {
	//console.log("req>>",req.body);
	res.send(hr);
	
})

app.get('/points', (req, res) => {
	if (points) {
		res.send(points);	
	} else {
		res.send("Points Empty");
	}
})

app.get('/clear', (req, res) => {
	points = [];
	res.send('Cleared');
})


app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Server Started");
	}
})
