import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App';
import fetch from 'isomorphic-fetch';

const app = express();
app.use(express.static('./dist'));
let data = {};
fetch("https://apis.is/concerts")
.then(r=>r.json())
.then(d=>{
    data=d
})

app.get("/", (req,res)=>{
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
        <script>const concertData = '${JSON.stringify(data)}'</script>
        <script src="main.js"></script>
        
    </body>
    </html>`
    res.send(html);
})

app.listen(3000,()=>console.log("listening to port 3000"))