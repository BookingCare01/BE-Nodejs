import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
import cors from 'cors';
require('dotenv').config();

let app = express();
app.use(cors({origin: true, credentials: true}));

//config app

app.use(function(req, res, next){
    //website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);

    //request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    //request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

    //set to true if you need the websitees to include cookies in the requests sent
    //to the API(e.g in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    //pass to next layer of middleware
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))


viewEngine(app);
initWebRoutes(app); 



connectDB();

let port = process.env.PORT || 6969 ;
app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port: " + port)
})

