const express = require("express");
const router = express.Router();
const test = require('../test.json')


router.get("/", function(req, res, next) {

    // console.log(test)

});
router.post("/", function(req, res, next) {
    req.body
});


module.exports = router;