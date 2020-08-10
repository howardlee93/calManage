// Workouts_route.js

const Workout = require('../models/Workout_model');
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => res.json({ msg: "This is the workout route" }));



//read
router.get('/', (req, res) => {
    Workout.find()
        .sort({ date: -1 })
        .then(Workouts => res.json(Workouts))
        .catch(err => res.status(404).json({ notweetsfound: 'Nothing to do!' }));

   
});



router.get('/:id', (req, res) => {
    Workout.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(Workouts => res.json(Workouts))
        .catch(err =>
            res.status(404).json({ notweetsfound: 'nothing for this user to do' }
        )
    );
});


//create
router.post("/", (req, res) => {

	const newWorkout = new Workout({
	  	title: req.body.title,
	  	length: req.body.length,
	  	date: req.body.date,
        details: req.body.details,
        calories: req.body.calories
  });
    newWorkout.save().then(Workout => res.json(Workout))
    .catch(err => res.status(404).json({message:"error bish"}));


});


//update
router.post("/:id", (req, res) =>{
    Workout.findById(req.params.id, function(err, Workout) {
        if (!Workout){
            res.status(404).send("data is not found");
        }else{
            Workout.Workout_description = req.body.Workout_description;
            Workout.category = req.body.category;

            Workout.save().then(Workout => {
                res.json('Workout updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});


//delete
router.delete(":/id", (req, res)=> {
	Workout.findById(req.params,id, (err,Workout) =>{
		if (!Workout){
			res.status(404).send("Workout not found")
		}else{
			Workout.findOneAndRemove({ _id: req.params.id })
			.catch(err => {
                res.status(400).send("Update not possible");
            });
		}
		
	});
})


module.exports = router;
