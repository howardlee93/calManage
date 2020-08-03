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
  		type: String,
  		required: true
	  },
	  
  	details:{
  		type: String,
	},
	calories:{
		type: Number,
		required: true
	}
	  

});


module.exports = Workout = mongoose.model('workout', WorkoutSchema);
