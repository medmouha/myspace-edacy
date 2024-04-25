const express= require('express');
const db = require('../db');
const router= express.Router();

const parametreRoute = require('./parametreRoute')

router.get('/', (req, res)=>{
    const usersJson = [];
    db.all("SELECT * FROM users ", (err, rows) => {
      usersJson.push(rows);
      console.log("users: ",rows);
  
      res.set('Content-Type', 'Application/json');
      res.set('Server', 'Myspace-Server');
      res.status(200).send(usersJson);
    })
})

router.use('/:id/parametres', parametreRoute)


router.get('/utilisateur/:id', (req, res)=>{
    res.send("/utilisateur/"+req.params.id)
})
  
  router.post('/utilisateurs', function (req, res) {
    const data = req.body
    console.log("data from client ", data);
    const sql = `INSERT INTO users(firstname, lastname, login, password) VALUES('${data.firstname}','${data.lastname}','${data.login}','${data.password}')`
    db.exec(sql);
    console.log("sql ", sql);
    userJson = { data };
  
    res.set('Content-Type', 'Application/json');
    res.set('Server', 'Myspace-Server');
    res.status(201).send(userJson);
  })

module.exports= router;