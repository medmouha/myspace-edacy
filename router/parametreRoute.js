const express= require('express');
const router= express.Router();

router.get("/", (req, res)=>{
    res.send("Liste des parametres")
})

router.get("/:id", (req, res)=>{
    res.send("parametre "+req.params.id)
})

module.exports= router;