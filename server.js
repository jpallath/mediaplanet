var PORT = process.env.PORT || 3000;
var MONGOURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mediaplanet'
var express      = require('express'),
	server         = express(),
	ejs            = require('ejs'),
	bodyParser     = require('body-parser'),
	methodOverride = require('method-override'),
	expressLayouts = require('express-ejs-layouts'),
	morgan         = require('morgan'),
	mongoose       = require('mongoose');

// Set
server.set('views', "./views");
server.set('view engine', 'ejs');
//Uses
// server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(express.static('./public'));
server.use(methodOverride('_method'));
server.use(morgan('short'));
server.use(expressLayouts);
// Routes and Controllers
var actionController = require ('./controllers/actions.js');
server.use('/actions', actionController);


// this is the "controller" for the routes below here, should
// we not hit one of the contollers above
server.use(function (req, res, next) {
	res.locals.controller = "main";
	next();
})

server.get('/', function(req, res){
  res.render('login');
});

server.get('/welcome', function(req, res){
	res.render('welcome');
})

//Catchall Routes
server.use(function(req, res){
  res.send("This page is under construction")
})

//Database Server Start
mongoose.connect(MONGOURI);
var db = mongoose.connection;

db.on('error', function(){
  console.log("Database not loaded!");
});

db.once('open', function(err){
  console.log("Error was: ", err);
  console.log("Database is set to stun");
  server.listen(PORT, function(){
    console.log("Server is set to stun")
  });
});
