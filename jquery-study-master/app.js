var express = require( 'express' ); // 외부모듈 expres 호출 
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var currentTime = new Date();

users = [{
	email : '1',
	password : '1',
	name : '1',
	job : '1',
	joinDate : currentTime,
	updateDate : currentTime
},
{
	email : '2',
	password : '2',
	name : '2',
	job : '2',
	joinDate : currentTime,
	updateDate : currentTime

}];

app.use( express.static(path.join(__dirname, '')));

//url 인코딩
app.use( bodyParser.urlencoded({ extended : true }));

//json 만드는
app.use( bodyParser.json() );
app.get( '/' , function(req, res){
	res.sendFile(path.join(__dirname + '/view/login.html'));
});

app.get( '/user' , function(req, res) {
     res.send(users);
});

app.get( '/user/:idx' , function(req, res){
	res.send( users[req.params.idx]);
});

app.post( '/email' , function(req, res){
	var email = req.body.email;
	console.log( email );
	var result = {
		status : false
	};
	for( var i=0;i<users.length;i++){
		if(email === users[i].email ){
			result.status = true;
			result.message = '중복된 사용자';
			break;
		}
	}
	res.send( result );
});

app.listen(8080);
console.log("Express Listening on port 8080....");
