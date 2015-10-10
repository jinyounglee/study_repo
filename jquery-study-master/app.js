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

app.post('/user' , function(req, res){
	var obj = req.body;
	console.log(obj);
	var result = {
		status : true
	};
	for( var i=0;i<user.length;i++){
		if(obj.email === users[i].email ){
			result.status = false;
			break;
		}
	}

	console.log( 'result status ::: ' + result.status);
	if(result.status){
		users.push(obj);
	}
	res.send(result);
});

app.post( '/login' , function(req, res){
	// 프론트에서 보내준 데이터를 users 와 비교해서 
	var obj = req.body;
	console.log('req.body :: ' + obj );
	var email = obj.email;
	var password = obj.password;

	var result = {
		status : false
	};
 	for(var i=0; i<users.length;i++){
 		console.log(email);
 		console.log( users[i].email );
 		if(email === users[i].email && password === users[i].password){
 			result.status = true;
 			break;
 		}
 	}
	res.send(result);
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
