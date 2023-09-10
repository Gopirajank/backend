const router = require("express").Router();
const User = require("../models/User")
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//UPDATE
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
      console.error(err);
    }
  });
        
  
  module.exports = router;
