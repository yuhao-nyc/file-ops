const fs = require('fs-extra');
const filesPath = 'files/original/';
const filesNewPath = 'files/moved/';
const date = new Date();
const dateStamp = date.getFullYear()
                  + '_' + (date.getMonth() + 1)
                  + '_' + date.getDate()
                  + '_' + date.getHours()
                  + '_' + date.getMinutes()
                  + '_' + date.getSeconds();
//a way to combining 2 js files with shared global parameter/arguments?

fs.readdir(filesPath, function(err, files) {
    if (err) {
      console.log('with '+ err +' errors')
    } else {
      files.forEach(function(f) { //loop through files read from the folder
          const fileName = f.split('.').shift();
          const extName = f.split('.').pop();
          const editName = fileName + '_EDITED_' + dateStamp + '.' + extName;
          const pathName = filesPath + f;
          const pathNameEdit = filesPath + editName;

          fs.rename(pathName, pathNameEdit, (err) => {
            if (err) throw err
          });
      });
    }
    console.log('moved and renamed ' + files.length + ' files, to '+ filesNewPath+'folder with 0 errors')
});

fs.copy(filesPath, filesNewPath, function(err){
  if (err) throw err
});

//a way to combine append.js + rename.js into index.jx in root?
