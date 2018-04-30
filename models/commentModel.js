var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Food Schema
 */
var CommentSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  foodId: {
  	type : Schema.Types.ObjectId, ref : 'Food',
    unique: true
  },
  content: {
    type: String,
    unique: true,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Comment', CommentSchema);
