var fs = require("fs");

var fsp = {
			readFile:function(file){
						 return new Promise(function(resolve){
							fs.readFile(file, 'utf8', (err, data) => {
								 resolve(data);
							});
						 })
					  },
			writeFile:function(file, dataToWrite){
						 return new Promise(function(resolve){
							fs.writeFile(file, dataToWrite, (err) => {
								fs.readFile(file, 'utf8', (err, data) => {
								 	resolve(data);
								});
								// resolve(dataToWrite);
							});
						 })
					  },
			appendFile:function(file, dataToAppend){
						 return new Promise(function(resolve){
							fs.appendFile(file, dataToAppend, (err) => {
								fs.readFile(file, 'utf8', (err, data) => {
								 	resolve(data);
								});
								// resolve(dataToAppend);
							});
						 })
					  }
		   };

fsp.readFile("dummy.txt")
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.error(err);
  });

fsp.writeFile("dummy.txt", 'Hello!')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.appendFile("dummy.txt", 'Hello again!')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });