const fs = require('fs');
const path = require('path');

function readDir(dirPath, extFilter) {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return "error";
        }
        const filteredFiles = files.filter(file => path.extname(file) === extFilter);
        filteredFiles.forEach(file => {
        });
    });
}

module.exports = readDir;
