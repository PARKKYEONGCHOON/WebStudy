"use strict";

const fs = require('fs');
const path = require('path');

const filePath =path.join(__dirname,'js200','hello.txt');

fs.open(filePath, 'r', (err,fd) => {
   if(err && err.code ==='ENOENT')
    return console.log('읽을 수 없는 파일');

    if(err) return console.log(err);

    console.log('읽을 수 있다');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) return console.log(err);

        console.log(data);
    });

    try{
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log(err);
    }
    catch(err)
    {
        console.log(err);
    }
    
});