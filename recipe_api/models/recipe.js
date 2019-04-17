var mongoose = require("mongoose");

var recipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required: 'Name Cannot be Blank'
    },
    onhand:{
        type: Boolean,
        default: false
    },
    cookmethod:{
        type: String,
        preptime: Number,
        cooktime: Number,
    },
    ingredients:{
        amount: String,
        ingredient: String
        
    },
    source:{
        author: String,
        cookbook: String
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

var Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;