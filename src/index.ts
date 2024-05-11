import express from 'express';
import bodyparser from 'body-parser';
import { UserRoutes } from './router/utilisateurRoute';
require('dotenv').config()


const app = express()

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const userRoutes= new UserRoutes;

app.use('/utilisateurs', userRoutes.router);


app.listen(process.env.PORT || 3000);
console.log("Server started on port "+process.env.PORT || 3000);