"use strict";

const fs = require('fs');
const path = require('path');

const removePath = (p, callback) => {
    fs.stat(p,(err,stats) => {
        if(err) return callback(err);

        if(!stats.isDirectory()) {
            console.log('파일이다');
            return fs.unlink(p, err => err ? callback(err) : callback(null,p));
        }

        console.log('폴더');
        fs.rmdir(p, (err) => {
            if(err) return callback(err);

            return callback(null,p);
        });
    });
};

const printResult = (err, result) =>{
    if(err) return console.log(err);
    console.log(`${result} 삭제`);

};

const p = path.join(__dirname, 'js200');

try
{
    const files = fs.readFileSync(p);
    if(files.length)
        files.forEach(f => removePath(path.join(p,f), printResult));
}
catch(err)
{
    if(err) return console.log(err);
}

removePath(p, printResult);