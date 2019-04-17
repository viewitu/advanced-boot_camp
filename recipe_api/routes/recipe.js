var express = require("express"),
    router  = express.Router(),
    db      = require("../models"),
    helpers = require("../helpers/recipe");
    

router.route('/')
    .get(helpers.getRecipes)
    .post(helpers.createRecipe)

router.route("/:recipeId")
    .get(helpers.getRecipe)
    .put(helpers.updateRecipe)
    .delete(helpers.deleteRecipe)



module.exports = router;