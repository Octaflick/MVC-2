const express = require("express");
const fs = require("fs");
const path = require("path");
const logger = require('./middleware/logger')
const users = require('./router/users')

const app = express();




app.use(express.json());

app.use('/users', users);



// get all users or filtered



app.listen(3002);