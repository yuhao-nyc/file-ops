const fs = require('fs-extra');
const jsonfile = require('jsonfile');
const filesPath = 'files/original/';
const date = new Date();
const dateStamp = date.getFullYear()
                  + '_' + (date.getMonth() + 1)
                  + '_' + date.getDate()
                  + '_' + date.getHours()
                  + '_' + date.getMinutes()
                  + '_' + date.getSeconds();

fs.readdir(filesPath, function(err, files) {
    if (err) {
      console.log('with '+ err +' errors')
    } else {
      files.forEach(function(f) {
          const fileName = f.split('.').shift();
          const extName = f.split('.').pop();
          const editName = fileName + '_EDITED_' + dateStamp + '.' + extName;
          const pathName = filesPath + f;
          const pathNameEdit = filesPath + editName;
          const jsonObj = {
            "original_name": f,
            "original_path": pathName,
            "new_name": editName,
            "new_path": pathNameEdit,
          };

          if ( extName === 'txt') {
            fs.appendFile(pathName, f + '\n' + pathName + '\n' + editName + '\n' + pathNameEdit, (err) => {
              if (err) throw err; //how to seperate different types of errors from one and other
            });
          }
          if (extName === 'json') {
            jsonfile.writeFile(pathName, jsonObj, {flag: 'a', spaces: 2}, function (err) {
              if (err) throw err;
            })
          }
      });
    }
});
