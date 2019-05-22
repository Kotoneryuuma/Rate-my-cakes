////MODULARIZATION WITH MODELS:
    ////the models file will contain all of the mongoose connection and schema definitions
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/cake_rate');

    var CommentSchema = new mongoose.Schema({
        comment: String, 
        rate: { type: Number, min: 1, max: 5 },
    }, {timestamps: true });


    var CakeSchema = new mongoose.Schema({
        name: String,
        baker: String,
        url: {type: String , default : "", required : true},
        comments: [CommentSchema],
        
    },{
        timestamps : true
    });

    

    mongoose.model('Cake', CakeSchema); 
    var Cake = mongoose.model('Cake');

    
    module.exports = Cake;