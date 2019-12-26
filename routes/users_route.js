// users_route.js

const User = require('../models/user_model');
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', (req,res) =>{
	res.json({
		id: req.user.id,
		handle: req.user.handle,
		email: req.user.email
	});
});

router.post('/register', (req, res)=>{
	
})




module.exports = router;
