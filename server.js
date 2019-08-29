import express from 'express';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App';

const app = express();

app.get("/", (req,res)=>{
    const appComponent = ReactDOMServer.renderToString(<App />);
    console.log(appComponent);
    fs.readFile('./index.html', 'utf8', (err,data)=>{
        const responseStr = data.replace('<div id="main"></div>', `<div id="main">${appComponent}</div>`);
        res.send(responseStr);
    })
})

app.listen(3000,()=>console.log("listening to port 3000"))