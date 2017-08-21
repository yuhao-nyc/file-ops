const fs = require('fs');

/* fs.writeFile('files/original/test.txt', 'Hello, ', function(err) {
    if (err) throw err;
}) */

const fileArr = [];
const len;
fs.readdir('files/original/', function(err, files) {
    if (err) return;
    files.forEach(function(f) {
        //console.log('Files: ' + f);
        fileArr.push(f);
        fs.appendFile('files/original/'+f, '\ntest ahhahha again again\n'+f);
        len = fileArr.length;

        //maybe try manually add dir name original and moved
        /* if (.json) {

        } else if (.txt) {

        } */
    });
    console.log(len+ 'files had been appened');


});

/* fs.stat('files/original/test.txt', function (err, stats) {
  if (err) throw err;
  console.log('stats: ' + JSON.stringify(stats));
}); */


console.log('information appended')
