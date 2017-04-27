var express=require("express");
var http=require("http");
var path=require("path");
var db = require('./database')
var dbLink = require("./json/dbproduction.json");
var handlebars=require("express-handlebars").create({defaultLayout:"main"});
var dbLink=require("./json/configuration.json");
var bodyParser = require("body-Parser");
var url = dbLink.devServer.url;


var exphbs  = require('express-handlebars');

var session =require("express-session");
var app = express();
app.use(session({
	secret:'secret msg',
	resave: false,
	saveUninitialized:true
}))

var authAdmin=function(req,res,next){
	if(req.session&&req.session.admin)
		return next();
	else
		return res.send(401,"401: You need to log in!");
};


var hbs = exphbs.create({defaultLayout:"main"});
var publicPath=path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(require('./routers/popMenus'));
app.use(require('./routers/orders'));
app.use(require('./routers/getInventory'));
app.use(require('./routers/login'));



db.connect(url, function(err){
    if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
} else {
	var listener=http.createServer(app).listen(process.env.PORT||3000);
	console.log('Server is listening at port '+listener.address().port);
 }
});

app.get("/",function(req,res){
		console.log("This is a request from the main page");
	res.sendFile(`${publicPath}/main.html`);
});

app.get("/cart",function(req,res){
		console.log("This is a request from the cart page");
	res.sendFile(`${publicPath}/cart.html`);
});
app.get("/getInventory", function(req, res){});

app.get("/",function(req,res){
	console.log("This is a request from the store");
	res.sendFile(`${publicPath}/store.html`);
});
module.exports.app=app;