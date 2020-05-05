// todo_model.js


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EventSchema = new Schema({
	user: {
    	type: Schema.Types.ObjectId,
    	ref: 'users'
  	},
  	todo: {
    	type: String,
    	required: true
  	},
  	date: {
    	type: Date,
    	default: Date.now
  	},
  	title:{
  		type: string,
      	required: true

  	},
  	time:{
  		type: string,
  		required: true
  	},
  	details:{
  		type:string,
  		required: true 
  	}

});


module.exports = Todo = mongoose.model('events', EventSchema);
