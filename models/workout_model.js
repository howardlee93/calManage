// todo_model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({

  	date: {
    	type: Date,
      	required: true 
  	},
    
  	title:{
  		type: String,
      	required: true

  	},
  	time:{
  		type: Number,
  		required: true
  	},
  	details:{
  		type: String,
  		required: true 
	},
	calories:{
		type: Number,
		required: true
	}
	  

});


module.exports = Workout = mongoose.model('workout', WorkoutSchema);
