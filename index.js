const express = require('express')
const app = express()
const path= require('path')
var bodyparser= require('body-parser')

app.use(express.static(path.join(__dirname,'static')));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get('/static/:filename', function (req, res) {
    console.log("valeur du param ", req.params);
    console.log("valeur du query ", req.query);
    console.log("valeur du body ", req.body);
    console.log("valeur du header ", req.headers);

    res.sendFile(path.join(__dirname,'static', req.params.filename));
})

app.get('/', function (req, res) {
    const contenuHtml= `
    <html>
        <head>
            <title>Notre Server</title>
        </head>
        <body>
            <div>
                <h1> Hello World!!! <h1>
            </div>
        </body>
    </html>`
    const contenuJson= `
    {
        'message':'json'
    }
    `
    res.set('Content-Type','Application/json');
    //res.set('Content-Type','Text/html');
    res.set('Server','Myspace-Server');
  res.status(201).send(contenuJson);
})

app.listen(3000);
console.log("Server started on port 3000");