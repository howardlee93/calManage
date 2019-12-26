

const express = require('express');
const cors = require('cors');
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//not necessary unless planning to use .env file 
// require('dotenv').config();

//setting up server 
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//tests 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



// database 

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});


//deployment -- might not need to use cuz concurrently but always good to have as referece 


// app.use(express.static(path.join(__dirname, "frontend", "build")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
// });


//routes 
app.get("/", (req, res) => res.send("Hello World!!"));


const users = require( "./routes/users_route");
app.use("/api/users", users);

const todos = require('./routes/todos_route');
app.use('/api/todos', todos);


