"use strict";

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'js200', 'hello.txt');

fs.access(filePath, fs.constants.F_OK, (err) => {
    if(err) return console.log('삭제 할 수 없는 파일');

    fs.unlink(filePath, (err) => err ?
    console.log(err) : console.log(`${filePath} 삭제`));
    
});

