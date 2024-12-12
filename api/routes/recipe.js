const router = require("express").Router();
const User = require("../models/User");
const Recipe = require("../models/recipe");


//CREATE RECIPE 
router.post("/:", async (req, res) => {
    const newRecipe = new Recipe(req.body);
    try {
        const savedRecipe = await newRecipe.save();
        res.status(200).json(savedRecipe);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE RECIPE
router.put("/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (recipe.username === req.body.username) {
            try {
                const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                    { new: true }
                );
                res.status(200).json(updatedRecipe);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only update your own recipes.")
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE RECIPE
router.delete("/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (recipe.username === req.body.username) {
            try {
                await recipe.delete();
                res.status(200).json("Recipe has been deleted.");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only delete your own recipes.")
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET RECIPE
router.get("/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
        let recipes;
        if (username) {
            recipes = await Recipe.find({ username });
        } else {
            recipes = await Recipe.find();
        }
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;