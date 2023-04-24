const mongoose = require('mongoose');
 module.exports.connection=function()
 {
 mongoose.connect('mongodb+srv://root:1234@cluster0.ww8gmhn.mongodb.net/?retryWrites=true&w=majority')
 .then(function()
 {
   console.log("mongo is connected")
 })
 .catch(function(err)
 {
   console.log(err+"error occurred")
 })
 }
