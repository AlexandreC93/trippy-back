const express = require("express");
const router = express.Router();

const hotels = [
    { name: "Ritz" }, 
    { name: "Hilton" }, 
    { name: "Trianon Palace" }
]

router.get("/", function (req, res, next) {
    res.json(hotels)
});
router.get("/:id", function (req, res, next) {
    res.json(hotels[req.params.id - 1])
});

router.post('/', function (req, res, next) {
    hotels.push(req.body)
    console.log(req.body)
    // console.log(req.query)
    res.json({
        succes: true,
        name: req.body.name
    })
})

router.put("/:id", (req, res, next)=>{
    // let id = req.params.id
    // hotels[id].name = req.body.name

    res.json({succes: true})
    console.log("PUT")
})

// router.post('/', function(req, res, next){
//     res.json({name: req.query.name})
// })


module.exports = router;