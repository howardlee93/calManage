// users_route.js

const User = require('../models/user_model');
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));






module.exports = router;
