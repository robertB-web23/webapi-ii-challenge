const express = require('express');

const Posts = require('./data/db.js');

const router = express.Router();



// GET all posts

router.get('/', (req, res) => {
    Posts.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(error => {
            res.status(500).json({message: 'unable to retrieve posts', error})
        })
})



module.exports = router;