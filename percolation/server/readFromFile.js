var fs = require('fs');

var content = fs.readFile('server/writeToConsole.txt', 'utf8', function(err, data) {
    if(err) {
        throw err;
    }
    console.log('file contents are');
    console.log(data);
});
