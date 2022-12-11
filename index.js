const app = require('./app');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/assignment',
{ useNewUrlParser: true, useUnifiedTopology: true },
() => {
console.log("server is running");
})
