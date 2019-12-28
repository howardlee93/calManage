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
	User.findOne({email: req.body.email})
		.then(user => {
			if (user){
				return res.status(404).json({email: "user already exist"});
			}else{
				const newUser = new User({
					handle: req.body.handle,
					email: req.body.email,
					password: req.body.password
				});
				
			}
		})

});

router.post('login', (req, res)=> {
	const email = req.body.email;
	const password = req.body.password;

	User.findOne({email})
		.then(user => {
			if (!user) {
				return res.status(404).json({email: "this user does not exist "});
			}

			

			
		})
});




module.exports = router;
