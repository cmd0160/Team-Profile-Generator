const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        throw err;
        return;
      }
      console.log('File Created!')
    });
  }