const fs = require('fs');

/* fs.readFile('files/original/test_rename.txt', 'utf8', function(err, fileContents) {
    if (err) throw err;
    console.log(fileContents)
}); */

const date = new Date();
const dateStamp = date.getFullYear()
                  + '_' + (date.getMonth() + 1)
                  + '_' + date.getDate()
                  + '_' + date.getHours()
                  + '_' + date.getMinutes()
                  + '_' + date.getSeconds();

//console.log(dateStamp);
const fileArr = [];


fs.readdir('files/original/', function(err, files) {
    if (err) return;
    files.forEach(function(f) {
        //console.log('Files: ' + f);
        const fileExt = f.split('.').pop();
        fileArr.push(f);
        console.log(fileArr);
    });
    //console.log(fileArr);

});

fs.rename('files/original/test.txt', 'files/moved/test_EDITED_'+ dateStamp +'.txt', (err) => {
  if (err) throw err;
  //console.log('renamed complete');
});

//console.log('renamed 1 file, with 0 error');
