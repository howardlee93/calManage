// Events_route.js


const Event = require('../models/event_model');
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => res.json({ msg: "This is the Events route" }));



//read
router.get('/', (req, res) => {
    Event.find()
        .sort({ date: -1 })
        .then(Events => res.json(Events))
        .catch(err => res.status(404).json({ notweetsfound: 'Nothing to do!' }));

   
});


//want to populate calendAR by date 


router.get('/:date', (req, res) => {
    let date = new Date(req.params.date);

    // let dateObj = new Date(date);
    
     Event.find({
            date: date// get å
    })
     .then(Events => res.json(Events))



});




router.get('/:id', (req, res) => {
    Event.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(Events => res.json(Events))
        .catch(err =>
            res.status(404).json({ notweetsfound: 'nothing for this user to do' }
        )
    );
});


//create
router.post("/", (req, res) => {

	const newEvent = new Event({
	  	Event: req.body.Event,
	  	title: req.body.title,
	  	time: req.body.time,
	  	date: req.body.date,
	  	details: req.body.details
  });
	newEvent.save().then(Event => res.json(Event));


});


//update
router.post("/:id", (req, res) =>{
    Event.findById(req.params.id, function(err, Event) {
        if (!Event){
            res.status(404).send("data is not found");
        }else{
            Event.Event_description = req.body.Event_description;
            Event.category = req.body.category;

            Event.save().then(Event => {
                res.json('Event updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});


//delete
router.delete(":/id", (req, res)=> {
	Event.findById(req.params,id, (err,Event) =>{
		if (!Event){
			res.status(404).send("event not found")
		}else{
			Event.findOneAndRemove({ _id: req.params.id })
			.catch(err => {
                res.status(400).send("Update not possible");
            });
		}
		
	});
})


module.exports = router;
