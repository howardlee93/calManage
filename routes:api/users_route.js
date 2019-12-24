// users_route.js

const User = require('../../models/User');
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));
