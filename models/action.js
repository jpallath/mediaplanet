var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

  var actionSchema = Schema({
    action: {type: String, required: true},
    media: {type: String, required: true},
    image: {type: String, required: true}
  })

  var Action = mongoose.model("Action", actionSchema);

  module.exports = Action;
