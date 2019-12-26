// todos_route.js


const Todo = require('../models/user_model');
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => res.json({ msg: "This is the todos route" }));






module.exports = router;
