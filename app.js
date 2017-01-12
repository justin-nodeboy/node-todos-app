require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');

const MongoClient = require("./MongoClient");
const app = module.exports = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.prototype.connectDB(err => {
    if (err) process.exit();
    const TodoRouter = require("./routes/TodoRouter");
    app.use(TodoRouter);
    app.listen(process.env.PORT || 5000, function () {
        console.log('Server Listen');
    });
});

