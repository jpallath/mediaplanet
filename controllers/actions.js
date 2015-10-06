var express = require ('express'),
    router  = express.Router(),
    bodyParser = require('body-parser')
    Action    = require('../models/action.js');

router.use(function (req, res, next) {
  res.locals.controller = 'actions';
  console.log("HUHUHUH");
  next();
});



//Index
router.get('/actionlist', function (req, res) {
  console.log('I received a GET request');
  Action.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

// New and Create
router.post('/actionlist', function(req, res){
  console.log("we are here");
  console.log(req);
  Action.create(req.body, function (err, action) {
    if(err) {
      console.log(action);
      console.log("there");
    } else {
      console.log("this");
      res.json(action);
    }
  })
});

//Delete
router.delete('/actionlist/:id', function(req, res){
  var id = req.params.id;
  console.log(id);
  Action.remove({_id:id}, function(err,removedAction){
    res.json(removedAction)
  })
});

//Edit
router.get('/actionlist/:id', function(req,res){
  var id = req.params.id;
  console.log(id);
  Action.findOne({_id: id}, function(err,edittedAction){
    res.json(edittedAction)
  })
});

//Update
router.put('/actionlist/:id', function(req,res){
  var updatedAction =(req.body);
  var id = req.params.id;
  Action.update({_id:id}, updatedAction, function(err, updated){
    res.json(updated)
  })
})


//Export
module.exports = router;
