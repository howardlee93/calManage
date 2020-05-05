// Events_route.js


const Event = require('../models/event_model');
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => res.json({ msg: "This is the Events route" }));




router.get('/', (req, res) => {
    Event.find()
        .sort({ date: -1 })
        .then(Events => res.json(Events))
        .catch(err => res.status(404).json({ notweetsfound: 'Nothing to do!' }));
});

router.get('/user/:user_id', (req, res) => {
    Event.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(Events => res.json(Events))
        .catch(err =>
            res.status(404).json({ notweetsfound: 'nothing for this user to do' }
        )
    );
});

router.post("/create", (req, res) => {

	const newEvent = new Event({
	  	Event: req.body.Event,
	    user: req.user.id,
	  	category: req.body.category,
	  	title: req.body.title,
	  	time: req.body.time,
	  	date: req.body.date
	  	details: req.body.details
  });
	newEvent.save().then(Event => res.json(Event));


});



router.post("/user/edit/:id", (req, res) =>{
    Event.findById(req.params.id, function(err, Event) {
        if (!Event)
            res.status(404).send("data is not found");
        else
            Event.Event_description = req.body.Event_description;
            Event.category = req.body.category;

            Event.save().then(Event => {
                res.json('Event updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});




module.exports = router;
