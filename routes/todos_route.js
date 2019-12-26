// todos_route.js


const Todo = require('../models/user_model');
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => res.json({ msg: "This is the todos route" }));




router.get('/', (req, res) => {
    Todo.find()
        .sort({ date: -1 })
        .then(todos => res.json(todos))
        .catch(err => res.status(404).json({ notweetsfound: 'Nothing to do!' }));
});

router.get('/user/:user_id', (req, res) => {
    Todo.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(todos => res.json(todos))
        .catch(err =>
            res.status(404).json({ notweetsfound: 'nothing for this user to do' }
        )
    );
});

router.post("/create", (req, res) => {

	const newTodo = new Todo({
	  	todo: req.body.todo,
	    user: req.user.id,
	  	category: req.body.category
  });
	newTodo.save().then(todo => res.json(todo));


}


router.post("/user/edit/:id", (req, res) =>{
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.category = req.body.category;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});




module.exports = router;
