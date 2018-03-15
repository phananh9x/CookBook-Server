'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Food Schema
 */
var FoodSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  categoryId: {
  	type : Schema.Types.ObjectId, ref : 'Category'
  },
  image: {
  	type : String
  },
  decriptions : {
  	type : String
  },
  material: {
  	type : String
  },
  content: {
  	[{
  		step : String,
  		[{
  			image : String
  		}]
  	}]
  },

  favourite: {
  	type : Number,
  	default: 0
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Food', FoodSchema);