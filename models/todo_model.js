// todo_model.js


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TodoSchema = new Schema({
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
  	}
  	category:{
  		type: string,
      required: true

  	}

});


module.exports = Todo = mongoose.model('todos', TodoSchema);
