import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App';
import fetch from 'isomorphic-fetch';
import bodyParser from 'body-parser';
import session from 'express-session';
import csurf from 'csurf';


const app = express();
const csrfProtection = csurf({ cookie: false })

app.use(express.static('./dist'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret: 'Kaffi er gott'
  }))
let data = {};
fetch("https://apis.is/concerts")
.then(r=>r.json())
.then(d=>{
    data=d
})

app.get("/", csrfProtection, (req,res)=>{
    data.token = req.csrfToken()
    const appComponent = ReactDOMServer.renderToString(<App data={data} />);
    const html = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        
    </head>
    <body>
        <div id="main">${appComponent}</div>
        <script>const concertData = ${JSON.stringify(data)}</script>
        <script src="main.js"></script>
        
    </body>
    </html>`
    res.send(html);
})

app.post("/comment", (req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.listen(3000,()=>console.log("listening to port 3000"))