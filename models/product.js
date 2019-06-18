var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    
    imagePath : { type: String , required:true},
    title : { type: String , required:true, text: true},
    description : { type: String , required:true},
    type : { type: String , required:true, text: true},
    price : { type: Number , required:true, text: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

module.exports= mongoose.model('Product',schema);