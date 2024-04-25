const express= require('express');
const router= express.Router();

router.get("/", (req, res)=>{
    res.send("Liste des messages")
})

router.get("/:id", (req, res)=>{
    res.send("message "+req.params.id)
})

module.exports= router;